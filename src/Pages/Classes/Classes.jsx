

import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import usePopularClass from '../../hooks/usePopularClass';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Classes = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user, loading } = useAuth();

    const [classes, , refetch] = usePopularClass();

    const location = useLocation();
    const navigate = useNavigate();
    const [disabledBtns, setDisabledBtns] = useState([]);

    useEffect(() => {
        fetchDisabledButtons();
    }, []);

    const fetchDisabledButtons = () => {
        fetch('http://localhost:5000/disabledButtons')
            .then((res) => res.json())
            .then((data) => {
                const disabledButtons = data.map((item) => item._id);
                setDisabledBtns(disabledButtons);
            })
            .catch((error) => {
                console.error('Error retrieving disabled buttons:', error);
            });
    };

    const handleSelectCourse = (classe) => {
        const { name, image, price, instructor, _id, description } = classe;

        if (!user) {
            Swal.fire({
                title: 'Please Login',
                text: 'After Successfully Login You will have access',
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
            return;
        } else if (user && user.email) {
            const classeData = { classId: _id, name, image, price, instructor, description };

            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(classeData),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setDisabledBtns([...disabledBtns, _id]);
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class is Selected.',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                })
                .catch((error) => {
                    console.error('Error selecting class:', error);
                });

            fetch('http://localhost:5000/disabledButtons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setDisabledBtns([...disabledBtns, _id]);
                    }
                })
                .catch((error) => {
                    console.error('Error disabling button:', error);
                });
        }
    };

    const isButtonDisabled = (classId) => {
        return disabledBtns.includes(classId) && user && user.email;
    };

    return (
        <div className="overflow-x-auto pt-5 pb-10">
            <h1 className="text-center pb-5">ALL Approved Classes</h1>

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
                        <tr key={classe._id} className={classe.availableSeats === 0 ? 'bg-red-100' : ''}>
                            <th>{index + 1}</th>
                            <td>{classe.name}</td>
                            <td>Not Available</td>
                            <td>{classe.instructor}</td>
                            <td>{classe.availableSeats}</td>
                            <td>{classe.price}</td>
                            <td>
                                <button
                                    className="btn bg-emerald-100"
                                    onClick={() => handleSelectCourse(classe)}
                                    disabled={classe.availableSeats === 0 || isAdmin || isInstructor || isButtonDisabled(classe._id)}
                                >
                                    Select
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Classes;
