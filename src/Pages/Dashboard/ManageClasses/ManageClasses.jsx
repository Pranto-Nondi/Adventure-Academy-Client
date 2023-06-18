
// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import usePopularClass from '../../../hooks/usePopularClass';

// const ManageClasses = () => {
//     const [classes, loading, refetch] = usePopularClass();
//     const [axiosSecure] = useAxiosSecure();


//     const handleApprove = async (classId) => {
//         try {
//             const response = await axiosSecure.post(`/api/classes/approve/${classId}`);
//             console.log(response)
//             if (response.data.success) {
//                 refetch(); 
//             }
//         } catch (error) {
//             console.error('Failed to approve class:', error);
//         }
//     };

//     const handleDeny = async (classId) => {
//         try {
//             const response = await axiosSecure.post(`/api/classes/deny/${classId}`);
//             if (response.data.success) {
//                 refetch(); 
//             }
//         } catch (error) {
//             console.error('Failed to deny class:', error);
//         }
//     };





//     return (
//         <div className="w-full max-h-full pt-10 pl-5">
//             <div className="overflow-x-auto">
//                 <table className="table table-xs table-pin-rows table-pin-cols">
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Class Image</th>
//                             <th>Class name</th>
//                             <th>Instructor name</th>
//                             <th>Instructor email</th>
//                             <th>Available seats</th>
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
//                                 <td>{index + 1}</td>
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
//                                 <td>{classItem?.instructorEmail}</td>
//                                 <td>{classItem?.availableSeats}</td>
//                                 <td>{classItem?.price}$</td>
//                                 <td>
//                                     {classItem?.status === 'pending' && (
//                                         <button className='btn btn-xs bg-yellow-200'>Pending</button>
//                                     )}
//                                     {classItem?.status === 'approved' && (
//                                         <button className='btn btn-xs bg-green-300' >Approved</button>
//                                     )}
//                                     {classItem?.status === 'denied' && (
//                                         <button className='btn btn-xs bg-red-300' >Denied</button>
//                                     )}
//                                 </td>
//                                 <td>
//                                     {classItem?.status === 'pending' && (
//                                         <button className='btn btn-xs btn-info' onClick={() => handleApprove(classItem._id)}>Approve</button>
//                                     )}
//                                 </td>
//                                 <td>
//                                     {classItem?.status === 'pending' && (
//                                         <button className='btn btn-xs btn-warning' onClick={() => handleDeny(classItem._id)}>Deny</button>
//                                     )}
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-primary btn-xs">FeedBack</button>
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


// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import usePopularClass from '../../../hooks/usePopularClass';

// const ManageClasses = () => {
//     const [classes, loading, refetch] = usePopularClass();
//     const [axiosSecure] = useAxiosSecure();
//     const [selectedClass, setSelectedClass] = useState(null);
//     const [feedback, setFeedback] = useState('');

//     const handleApprove = async (classId) => {
//         try {
//             const response = await axiosSecure.post(`/api/classes/approve/${classId}`);
//             if (response.data.success) {
//                 refetch();
//             }
//         } catch (error) {
//             console.error('Failed to approve class:', error);
//         }
//     };

//     const handleDeny = async (classId) => {
//         try {
//             const response = await axiosSecure.post(`/api/classes/deny/${classId}`);
//             if (response.data.success) {
//                 refetch();
//             }
//         } catch (error) {
//             console.error('Failed to deny class:', error);
//         }
//     };

//     const handleOpenModal = (classItem) => {
//         setSelectedClass(classItem);
//     };

//     const handleCloseModal = () => {
//         setSelectedClass(null);
//         setFeedback('');
//     };

//     const handleSendFeedback = async (classId, feedback) => {
//         try {
//             const response = await axiosSecure.post(
//                 `/api/classes/feedback/${classId}`,
//                 { feedback }
//             );
//             if (response.data.success) {
//                 handleCloseModal();
//             }
//         } catch (error) {
//             console.error('Failed to send feedback:', error);
//         }
//     };
//     return (
//         <div className="w-full max-h-full pt-10 pl-5">
//             <div className="overflow-x-auto">
//                 <table className="table table-xs table-pin-rows table-pin-cols">
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Class Image</th>
//                             <th>Class name</th>
//                             <th>Instructor name</th>
//                             <th>Instructor email</th>
//                             <th>Available seats</th>
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
//                                 <td>{index + 1}</td>
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
//                                 <td>{classItem?.instructorEmail}</td>
//                                 <td>{classItem?.availableSeats}</td>
//                                 <td>{classItem?.price}$</td>
//                                 <td>
//                                     {classItem?.status === 'pending' && (
//                                         <button className='btn btn-xs bg-yellow-200'>Pending</button>
//                                     )}
//                                     {classItem?.status === 'approved' && (
//                                         <button className='btn btn-xs bg-green-300' >Approved</button>
//                                     )}
//                                     {classItem?.status === 'denied' && (
//                                         <button className='btn btn-xs bg-red-300' >Denied</button>
//                                     )}
//                                 </td>
//                                 <td>
//                                     {classItem?.status === 'pending' && (
//                                         <button className='btn btn-xs btn-info' onClick={() => handleApprove(classItem._id)}>Approve</button>
//                                     )}
//                                 </td>
//                                 <td>
//                                     {classItem?.status === 'pending' && (
//                                         <button className='btn btn-xs btn-warning' onClick={() => handleDeny(classItem._id)}>Deny</button>
//                                     )}
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-primary btn-xs" onClick={() => handleOpenModal(classItem)}>
//                                         Feedback
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {selectedClass && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white rounded-lg p-5">
//                         <h2 className="text-lg font-bold mb-3">
//                             Feedback for {selectedClass.className}
//                         </h2>
//                         <textarea
//                             className="w-full h-40 border border-gray-300 p-2 mb-3"
//                             placeholder="Enter your feedback here"
//                             value={feedback}
//                             onChange={(e) => setFeedback(e.target.value)}
//                         ></textarea>
//                         <div className="flex justify-end">
//                             <button
//                                 className="btn btn-primary mr-2"
//                                 onClick={() => handleSendFeedback(feedback)}
//                             >
//                                 Send Feedback
//                             </button>
//                             <button
//                                 className="btn btn-secondary"
//                                 onClick={handleCloseModal}
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManageClasses;

import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import usePopularClass from '../../../hooks/usePopularClass';

const ManageClasses = () => {
    const [classes, loading, refetch] = usePopularClass();
    const [axiosSecure] = useAxiosSecure();
    const [selectedClass, setSelectedClass] = useState(null);
    const [feedback, setFeedback] = useState('');

    const handleApprove = async (classId) => {
        try {
            const response = await axiosSecure.post(`/api/classes/approve/${classId}`);
            if (response.data.success) {
                refetch();
            }
        } catch (error) {
            console.error('Failed to approve class:', error);
        }
    };

    const handleDeny = async (classId) => {
        try {
            const response = await axiosSecure.post(`/api/classes/deny/${classId}`);
            if (response.data.success) {
                refetch();
            }
        } catch (error) {
            console.error('Failed to deny class:', error);
        }
    };

    const handleOpenModal = (classItem) => {
        setSelectedClass(classItem);
    };

    const handleCloseModal = () => {
        setSelectedClass(null);
        setFeedback('');
    };

    const handleSendFeedback = async () => {
        try {
            const response = await axiosSecure.post(
                `/api/classes/feedback/${selectedClass._id}`,
                { feedback }
            );
            if (response.data.success) {
                handleCloseModal();
            }
        } catch (error) {
            console.error('Failed to send feedback:', error);
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
                                <td>{classItem?.price}$</td>
                                <td>
                                    {classItem?.status === 'pending' && (
                                        <button className='btn btn-xs bg-yellow-200'>Pending</button>
                                    )}
                                    {classItem?.status === 'approved' && (
                                        <button className='btn btn-xs bg-green-300' >Approved</button>
                                    )}
                                    {classItem?.status === 'denied' && (
                                        <button className='btn btn-xs bg-red-300' >Denied</button>
                                    )}
                                </td>
                                <td>
                                    {classItem?.status === 'pending' && (
                                        <button className='btn btn-xs btn-info' onClick={() => handleApprove(classItem._id)}>Approve</button>
                                    )}
                                </td>
                                <td>
                                    {classItem?.status === 'pending' && (
                                        <button className='btn btn-xs btn-warning' onClick={() => handleDeny(classItem._id)}>Deny</button>
                                    )}
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-xs" onClick={() => handleOpenModal(classItem)}>
                                        Feedback
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedClass && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-300 rounded-lg p-5">
                        <h2 className="text-lg font-bold mb-3">
                            Feedback for {selectedClass.className}
                        </h2>
                        <textarea
                            className="w-full h-40 border border-gray-300 p-2 mb-3"
                            placeholder="Enter your feedback here"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end">
                            <button
                                className="btn btn-primary mr-2"
                                onClick={handleSendFeedback}
                            >
                                Send Feedback
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageClasses;


