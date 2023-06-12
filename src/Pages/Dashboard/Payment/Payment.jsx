import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLocation, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [selectClass, setSelectClass] = useState(null);
    const [axiosSecure] = useAxiosSecure();


    useEffect(() => {
        // Fetch the selectClass object using the id
        //  API call using axios
        axiosSecure.get(`/selectedClasses/${id}`)
            .then(response => {
                setSelectClass(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    if (!selectClass) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>;
    }
    return (
        <div>
            <h2 className="text-3xl text-center">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm selectClass={selectClass}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;