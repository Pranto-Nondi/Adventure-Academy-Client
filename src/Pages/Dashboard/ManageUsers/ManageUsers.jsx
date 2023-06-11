

import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    const makeAdmin = async (user) => {
        try {
            const response = await axiosSecure.patch(`/users/${user._id}/admin`);
            if (response.data.success) {
                refetch();
            }
        } catch (error) {
            console.error('Error making admin:', error);
        }
    };

    const makeInstructor = async (user) => {
        try {
            const response = await axiosSecure.patch(`/users/${user._id}/instructor`);
            if (response.data.success) {
                refetch();
            }
        } catch (error) {
            console.error('Error making instructor:', error);
        }
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? (
                                        'admin'
                                    ) : (
                                        <button
                                            onClick={() => makeAdmin(user)}
                                            className="btn btn-success btn-sm text-white"
                                            disabled={user.role === 'instructor'}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {user.role === 'instructor' ? (
                                        'instructor'
                                    ) : (
                                        <button
                                            onClick={() => makeInstructor(user)}
                                            className="btn btn-info btn-sm text-white"
                                            disabled={user.role === 'admin'}
                                        >
                                            Make Instructor
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
