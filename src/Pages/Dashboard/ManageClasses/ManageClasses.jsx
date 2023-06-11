


import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import usePopularClass from '../../../hooks/usePopularClass';

const ManageClasses = () => {
    const [classes, loading, refetch] = usePopularClass();
    const [axiosSecure] = useAxiosSecure();

    const handleApprove = async (classId) => {
        try {
            const response = await axiosSecure.post(`/api/classes/approve/${classId}`);
            console.log(response)
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
                                        <button className='btn btn-xs bg-green-300' onClick={() => handleApprove(classItem._id)}>Approve</button>
                                    )}
                                </td>
                                <td>
                                    {classItem?.status === 'pending' && (
                                        <button className='btn btn-xs bg-red-300' onClick={() => handleDeny(classItem._id)}>Deny</button>
                                    )}
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




