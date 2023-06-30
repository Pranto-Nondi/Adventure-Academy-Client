
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { RotatingLines } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../../hooks/useSelectedClasses';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {
    const { user, loading, setSelectClass } = useAuth();

    const [selectedClasses, refetch] = useSelectedClasses()
    const [axiosSecure] = useAxiosSecure();

  
    const handleDelete = selectClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/selectedClasses/${selectClass._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
            </div>
        );
    }

    return (
        <>
            <div>
                <div className="overflow-x-auto pt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Pay</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedClasses?.map((selectClass, index) => (
                                <tr key={selectClass._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selectClass?.imgURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{selectClass.className}</td>
                                    <td>{selectClass.price}$</td>
                                    <td>
                                        <Link to={`/dashboard/payment?id=${selectClass._id}`}><button className="btn btn-success btn-sm">Buy</button></Link>

                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(selectClass)} className="btn btn-error btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SelectedClasses;
