

import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import usePopularClass from '../../hooks/usePopularClass';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useSelectedClasses from '../../hooks/useSelectedClasses';


const Classes = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    const [isInstructor] = useInstructor();
    const { user } = useAuth();
    const [allClasses, ,] = usePopularClass();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedClasses, refetch] = useSelectedClasses()
    const [isLoading, setIsLoading] = useState(true);
    // const [selectedClasses, setSelectedClasses] = useState([]);

    const classes = allClasses.filter((classe) => classe.status === 'approved');

    

    const handleSelectCourse = (classe) => {
        if (user && user.email) {
            const { _id, className, imgURL, instructorName, instructorEmail, availableSeats, price, status } = classe;


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

            fetch('https://summer-camp-phograpy-school-server.vercel.app/selectClasses', {
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
                        refetch()
                        // fetchSelectedClasses(user.email); // fetch updated selected classes for the user
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
        if (classe.email)
            return selectedClasses?.some((selectedClass) => selectedClass.classId === classe._id);
    };

    return (
        <>
            <section className="p-4 pb-10">
                <h2 className="text-3xl font-bold  mb-4">Top Classes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {classes.map((classe, index) => (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={classe?.imgURL} alt={classe.imgURL} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-start text-center">
                                <h2 className="card-title">Class Name: {classe.className}</h2>
                                <p className="card-title text-xl">Instructor name: {classe.instructorName}</p>
                                <p className="card-title text-lg">Available seats: {classe.availableSeats}</p>
                                <p className="card-title text-md">Price: {classe.price}$</p>
                                <div className="card-actions">
                                    {isAdmin || isInstructor || classe?.availableSeats===0 ? (<button className="btn bg-red-500" disabled >
                                        select
                                    </button>) : (isClassSelected(classe)) ? (
                                        <button className="btn bg-green-500" >
                                            Selected
                                        </button>
                                    ) : (
                                        <button onClick={() => handleSelectCourse(classe)} className="btn bg-emerald-200">
                                            Select
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Classes;
