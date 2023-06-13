
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import usePopularClass from '../../../hooks/usePopularClass';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyClasses = () => {
    const [classes, loading, refetch] = usePopularClass();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const  myClasses = classes.filter(item => item.instructorEmail == user?.email);
    console.log(myClasses)

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
                            <th>Info</th>
                            <th>FeedBack</th>

                        </tr>
                    </thead>
                    <tbody>
                        {myClasses.map((classItem, index) => (
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
                                    <Link to={`/dashboard/updateClass/${classItem._id}`}><button className="btn btn-info btn-xs">Update</button></Link>
                                </td>
                                <td>
                                    <p className=" font-semibold ">Not Available</p>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;




