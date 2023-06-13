
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const EnrolledClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        const fetchPaymentHistory = async () => {
            try {
                const response = await axiosSecure.get('/api/payment/history', {
                    params: { email: user.email },
                });
                setPaymentHistory(response.data);
            } catch (error) {
                console.error('Error fetching payment history:', error);
                // Handle error and show appropriate message to the user
            }
        };

        fetchPaymentHistory();
    }, [axiosSecure, user.email]);
    console.log(paymentHistory)



    return (
        <>
            <div>
                <div className="overflow-x-auto pt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Image</th>
                                <th>InsTructor Name</th>

                                {/* Add more table headers as per your data */}
                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistory.map((payment, index) => (
                                <tr key={payment._id}>
                                    <td>{index + 1}</td>
                                    <td>{payment.itemName}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-12">
                                                    <img src={payment?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{payment.instructorName}</td>
                                    {/* Render other payment fields */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default EnrolledClasses;
