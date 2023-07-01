

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import usePopularClass from '../../hooks/usePopularClass';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useSelectedClasses from '../../hooks/useSelectedClasses';

const Classes = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useAuth();
    const [allClasses] = usePopularClass();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedClasses, refetch] = useSelectedClasses();
    const [isLoading, setIsLoading] = useState(true);

    const classes = allClasses.filter((classe) => classe.status === 'approved');

    const handleSelectCourse = (classe) => {
        if (user && user.email) {
            const {
                _id,
                className,
                imgURL,
                instructorName,
                instructorEmail,
                availableSeats,
                price,
                status,
            } = classe;

            const classData = {
                classId: _id,
                className,
                imgURL,
                price,
                instructorName,
                availableSeats,
                instructorEmail,
                status,
                email: user.email,
            };

            fetch('http://localhost:5000/selectClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(classData),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        refetch(); // refetch classes to update the UI
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class selected successfully.',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        refetch();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data.message,
                        });
                    }
                })
                .catch((error) => {
                    console.error('Error occurred while selecting a class:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to select the class.',
                    });
                });
        } else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location.pathname } });
                }
            });
        }
    };

    const isClassSelected = (classe) => {
        if (classe.email) {
            return selectedClasses?.some((selectedClass) => selectedClass.classId === classe._id);
        }
    };

    return (
        <section className="p-4 pb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Top Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {classes.map((classe, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
                    >
                        <figure className="px-6 py-4">
                            <img src={classe?.imgURL} alt={classe.imgURL} className="rounded-xl w-full" />
                        </figure>
                        <div className="px-6 py-4">
                            <h2 className="text-xl font-bold mb-2">{classe.className}</h2>
                            <p className="text-lg">{classe.instructorName}</p>
                            <p className="text-md">Available seats: {classe.availableSeats}</p>
                            <p className="text-md">Price: {classe.price}$</p>
                            <div className="flex justify-center mt-4">
                                {isAdmin || isInstructor || classe.availableSeats === 0 ? (
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg opacity-50 cursor-not-allowed">
                                        Select
                                    </button>
                                ) : isClassSelected(classe) ? (
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-green-600">
                                        Selected
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleSelectCourse(classe)}
                                        className="bg-emerald-200 text-black px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-emerald-300"
                                    >
                                        Select
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Classes;
