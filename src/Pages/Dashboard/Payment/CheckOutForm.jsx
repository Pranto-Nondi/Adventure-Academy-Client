
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckOutForm = ({ selectClass }) => {
    const { price } = selectClass || [];
    console.log(price, selectClass)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => {
                    console.log('Error creating payment intent:', error);
                });
        }
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');

        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                selectClassItem: selectClass._id,
                classItem: selectClass.classId,
                status: 'service pending',
                itemName: selectClass.className,
                image: selectClass.imgURL,
                instructorName: selectClass.instructorName,

            }


            axiosSecure.post(`/payments/${selectClass._id}`, payment)
                .then(res => {
                    navigate('/dashboard/paymentHistory');

                    if (res.data.insertResult.insertedId) {
                        // Send a request to update the class availableSeats
                        axios.put(`http://localhost:5000/classes/${selectClass.classId}`)
                            .then(res => {
                                console.log(res.data); // Updated class data from the server
                            })
                            .catch(error => {
                                console.error(error);
                            });
                    }
                })
                .catch(error => {
                    console.error(error);
                });



        }


    }

    return (
        <>

            <form className="w-[70%] m-8" onSubmit={handleSubmit}>
                <div className="flex gap-10 justify-between p-10 ">

                    <h2 className="text-3xl ">Payment</h2>
                    <h2 className="text-2xl ">Price: {price}$</h2>
                </div>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-success btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    {processing ? 'Processing...' : 'Pay'}
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500 ml-10">Transaction complete with transactionId: {transactionId}</p>}



        </>

    );
};

export default CheckOutForm;
