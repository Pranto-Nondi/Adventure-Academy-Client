
// import React, { useEffect, useState } from 'react';
// import useAuth from '../../../hooks/useAuth';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// const PaymentHistory = () => {
//     const { user } = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     const [paymentHistory, setPaymentHistory] = useState([]);

//     useEffect(() => {
//         const fetchPaymentHistory = async () => {
//             try {
//                 const response = await axiosSecure.get('/api/payment/history', {
//                     params: { email: user.email },
//                 });
//                 setPaymentHistory(response.data);
//             } catch (error) {
//                 console.error('Error fetching payment history:', error);
//                 // Handle error and show appropriate message to the user
//             }
//         };

//         fetchPaymentHistory();
//     }, [axiosSecure, user.email]);

//     // Helper function to format the date
//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         const options = {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//             hour12: true,
//         };
//         return date.toLocaleString('en-US', options);
//     };

//     return (
//         <>

//             {paymentHistory ==[] ? <h1>No Histry</h1> : <>
//                 <div>
//                     <div className="overflow-x-auto pt-5">
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Date</th>
//                                     <th className='text-end'>Paid Amount</th>
//                                     <th>Class Name</th>
//                                     <th>Transaction Info</th>
//                                     {/* Add more table headers as per your data */}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {paymentHistory.map((payment, index) => (
//                                     <tr key={payment._id}>
//                                         <td>{index + 1}</td>
//                                         <td>{formatDate(payment.date)}</td>
//                                         <td className='text-end'>{payment.price}</td>
//                                         <td>{payment.itemName}</td>
//                                         <td>{payment.transactionId}</td>
//                                         {/* Render other payment fields */}
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </>}


//         </>
//     );
// };

// export default PaymentHistory;



import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
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

    // Helper function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        return date.toLocaleString('en-US', options);
    };

    return (
        <>
            {paymentHistory.length === 0 ? (
                <div className='container mx-auto mt-10 pt-10'>
                    <h1 className='text-center text-3xl mt-10 pt-10 '>You Have No Payment History</h1>
                </div>
            ) : (
                <div>
                    <div className="overflow-x-auto pt-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th className="text-end">Paid Amount</th>
                                    <th>Class Name</th>
                                    <th>Transaction Info</th>
                                    {/* Add more table headers as per your data */}
                                </tr>
                            </thead>
                            <tbody>
                                {paymentHistory.map((payment, index) => (
                                    <tr key={payment._id}>
                                        <td>{index + 1}</td>
                                        <td>{formatDate(payment.date)}</td>
                                        <td className="text-end">{payment.price}</td>
                                        <td>{payment.itemName}</td>
                                        <td>{payment.transactionId}</td>
                                        {/* Render other payment fields */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaymentHistory;
