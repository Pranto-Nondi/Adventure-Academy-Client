
// // import usePopularClass from "../../../hooks/usePopularClass";
// // import useAxiosSecure from "../../../hooks/useAxiosSecure";

// // const ManageClasses = () => {
// //     const [classes, loading, refetch] = usePopularClass()
// //     const [axiosSecure] = useAxiosSecure();


// //     return (
// //         <div className="w-full max-h-full">

// //             <div className="overflow-x-auto w-full">
// //                 <table className="table w-full">
// //                     {/* head */}
// //                     <thead>
// //                         <tr>
// //                             <th>#</th>
// //                             <th>Class Image</th>
// //                             <th>Class name</th>
// //                             <th>Instructor name</th>
// //                             <th>Instructor email</th>
// //                             <th>Available seats</th>
// //                             <th>Price</th>
// //                             <th>Action</th>
// //                             <th>Action</th>
// //                             <th>Info</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {
// //                             classes.map((class, index) => 
// //                             <tr key={class._id}>
// //                                 <td>
// //                                     {index + 1}
// //                                 </td>
// //                                 <td>
// //                                     <div className="flex items-center space-x-3">
// //                                         <div className="avatar">
// //                                             <div className="mask mask-squircle w-12 h-12">
// //                                                 <img src={class.imgURL} alt="Avatar Tailwind CSS Component" />
// //                                             </div>
// //                                         </div>
// //                                         <div>
// //                                             <div className="font-bold">{class.className}</div>
// //                                         </div>
// //                                     </div>
// //                                 </td>
// //                                 <td>
// //                                     {class.instructorName}
// //                                 </td>
// //                                 <td className="text-right">${class.instructorEmail}</td>
// //                                 <td className="text-right">${class.availableSeats}</td>
// //                                 <td className="text-right">${class.price}</td>
// //                                 <td className="text-right">${class.status}</td>

// //                                 <td>
// //                                     <button className="btn btn-ghost btn-xs">Approve</button>
// //                                 </td>
// //                                 <td>
// //                                     <button className="btn btn-ghost btn-xs">Denny</button>
// //                                 </td>
// //                                 <td>
// //                                     <button className="btn btn-ghost btn-xs">FeedBack</button>
// //                                 </td>

// //                             </tr>
// //                             )
// //                         }

// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ManageClasses;

// import React from 'react';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import usePopularClass from '../../../hooks/usePopularClass';

// const ManageClasses = () => {
//     const [classes, loading, refetch] = usePopularClass();
//     const [axiosSecure] = useAxiosSecure();

//     return (
//         <div className="w-full max-h-full pt-10 pl-5">
//             <div className="overflow-x-auto">
//                 <table className="table table-xs table-pin-rows table-pin-cols">
//                     <thead>
//                         <tr>
//                             <th>
//                                 #
//                             </th>
//                             <th>Class Image</th>
//                             <th> Class name</th>
//                             <th>Instructor name</th>
//                             <th> Instructor email</th>
//                             <th> Available seats</th>
//                             <th>Price</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                             <th>Action</th>
//                             <th>Info</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {classes.map((classItem, index) => (
//                             <tr key={classItem._id}>
//                                 <td>
//                                     {index + 1}
//                                 </td>
//                                 <td>
//                                     <div className="flex items-center space-x-3">
//                                         <div className="avatar">
//                                             <div className="mask mask-squircle w-12 h-12">
//                                                 <img src={classItem?.imgURL} alt="Avatar Tailwind CSS Component" />
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </td>
//                                 <td>{classItem?.className}</td>
//                                 <td>{classItem?.instructorName}</td>
//                                 <td>
//                                     {classItem?.instructorEmail}

//                                 </td>
//                                 <td>
//                                     {classItem?.availableSeats}

//                                 </td>
//                                 <td>{classItem?.price}</td>
//                                 <td><button className='btn btn-xs bg-yellow-200'>{classItem?.status}</button></td>
//                                 <td><button className='btn btn-xs bg-green-300'>Approve</button></td>
//                                 <td><button className='btn btn-xs bg-red-300'>Deny</button></td>

//                                 <td>
//                                     <button className="btn btn-info btn-xs">FeedBack</button>
//                                 </td>


//                             </tr>
//                         ))}
//                     </tbody>

//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageClasses;

import React, { useState } from 'react';
import usePopularClass from '../../../hooks/usePopularClass';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageClasses = () => {
    const [classes, loading, refetch] = usePopularClass();
    const [axiosSecure] = useAxiosSecure();

    const handleApprove = async (classItem) => {
        try {
            const response = await axiosSecure.post('/classes/approve', { classItem });
            const updatedClass = response.data;
            // Update the class item in the state with the updated status
            const updatedClasses = classes.map((item) => {
                if (item._id === updatedClass._id) {
                    return { ...item, status: updatedClass.status };
                }
                return item;
            });
            setClasses(updatedClasses);
        } catch (error) {
            console.error('Error approving class:', error);
            // Handle error if needed
        }
    };

    const handleDeny = async (classItem) => {
        try {
            const response = await axiosSecure.post('/classes/deny', { classItem });
            const updatedClass = response.data;
            // Update the class item in the state with the updated status
            const updatedClasses = classes.map((item) => {
                if (item._id === updatedClass._id) {
                    return { ...item, status: updatedClass.status };
                }
                return item;
            });
            setClasses(updatedClasses);
        } catch (error) {
            console.error('Error denying class:', error);
            // Handle error if needed
        }
    };

    return (
        <div className="w-full max-h-full pt-10 pl-5">
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem, index) => (
                            <tr key={classItem._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classItem?.imgURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{classItem?.className}</td>
                                <td>{classItem?.instructorName}</td>
                                <td>{classItem?.instructorEmail}</td>
                                <td>{classItem?.availableSeats}</td>
                                <td>{classItem?.price}</td>
                                <td>
                                    <button className="btn btn-xs bg-yellow-200">{classItem?.status}</button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-xs bg-green-300"
                                        onClick={() => handleApprove(classItem)}
                                        disabled={classItem.status !== 'pending'}
                                    >
                                        Approve
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-xs bg-red-300"
                                        onClick={() => handleDeny(classItem)}
                                        disabled={classItem.status !== 'pending'}
                                    >
                                        Deny
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-info btn-xs">FeedBack</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;



