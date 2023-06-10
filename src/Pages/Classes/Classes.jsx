

import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import usePopularClass from '../../hooks/usePopularClass';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import { RotatingLines } from 'react-loader-spinner';

const Classes = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user, loading } = useAuth();
    const [classes, , refetch] = usePopularClass();
    const location = useLocation();
    const navigate = useNavigate();
    const [disabledBtns, setDisabledBtns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchDisabledButtons();

        if (user && user.email) {
            fetchUserClasses(user.email);
        }
    }, []);

    const fetchDisabledButtons = async () => {
        try {
            const response = await fetch('http://localhost:5000/disabledButtons');
            const data = await response.json();

            if (Array.isArray(data)) {
                const disabledButtons = data.map((item) => item.classId);
                setDisabledBtns(disabledButtons);
            } else {
                console.error('Invalid response format:', data);
            }
        } catch (error) {
            console.error('Error retrieving disabled buttons:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchUserClasses = async (email) => {
        console.log(email)
        try {
            const response = await fetch(`http://localhost:5000/userClasses?email=${email}`);
            const data = await response.json();
            console.log(data)
            if (Array.isArray(data)) {
                const userClasses = data.map((item) => item.classId);
                setDisabledBtns(userClasses);
            } else {
                console.error('Invalid response format:', data);
            }
        } catch (error) {
            console.error('Error retrieving user classes:', error);
        }
    };

    const handleSelectCourse = async (classe) => {
        console.log(classe);
        const { name, image, price, instructor, _id, availableSeats, description } = classe;

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
        }

        if (user && user.email) {
            try {
                const classeData = {
                    classId: _id,
                    name,
                    image,
                    price,
                    instructor,
                    availableSeats,
                    description,
                    email: user.email,
                };

                const response = await fetch('http://localhost:5000/classes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(classeData),
                });
                const data = await response.json();

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
                    fetchUserClasses(user.email); // Fetch user classes again after selecting a class
                }
            } catch (error) {
                console.error('Error selecting class:', error);
            }

            try {
                const response = await fetch('http://localhost:5000/disabledButtons', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ classId: _id, email: user.email }),
                });
                const data = await response.json();

                if (data.success) {
                    setDisabledBtns([...disabledBtns, _id]);
                }
            } catch (error) {
                console.error('Error disabling button:', error);
            }
        }
    };

    const isButtonDisabled = (classId) => {
        return disabledBtns.includes(classId) && user && user.email;
    };

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
            </div>
        );
    }

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





