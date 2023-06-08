


import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import usePopularClass from '../../hooks/usePopularClass';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RotatingLines } from 'react-loader-spinner';


const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useAuth();
    const { data: userInfo = {}, refetch } = useQuery(['user'], async () => {
        const res = await axiosSecure.get(`user/${user?.email}`)
        return res.data;
    })
    console.log(userInfo)
    const [classes] = usePopularClass();

    const location = useLocation();
    const navigate = useNavigate();

    const handleSelectCourse = (classe) => {
        if (!user) {
            Swal.fire({
                title: 'Please Login',
                text: 'After SuccessFully Login You have to access',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace: true });
                }
            });
            return; // Stop further execution if the user is not logged in
        }

        // Handle course selection logic here
    };

    return (
        <div className="overflow-x-auto pt-5 pb-10">
            <h1 className='text-center pb-5'>ALL Approved Classes</h1>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
            ) : (
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Img</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classe, index) => (
                            <tr key={classe._id} className={classe.availableSeats === 0 ? 'bg-red-200' : ''}>
                                <th>{index + 1}</th>
                                <td>{classe.name}</td>
                                <td>Not Available</td>
                                <td>{classe.instructor}</td>
                                <td>{classe.availableSeats}</td>
                                <td>{classe.price}</td>
                                <td>
                                    <button
                                        className="btn"
                                        onClick={() => handleSelectCourse(classe)}
                                        disabled={classe.availableSeats === 0 || userInfo.role}
                                    >
                                        Select
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Instructors;
