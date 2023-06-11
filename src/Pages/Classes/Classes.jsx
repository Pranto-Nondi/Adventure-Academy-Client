
import { useState } from 'react';
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

    const [isLoading, setIsLoading] = useState(true);

    const handleSelectCourse = (classe) => {
        // console.log(item);
        const { _id, className, imgURL, instructorName, instructorEmail, availableSeats, price, status } = classe;
        if (user && user.email) {
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
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
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
            <section className="p-4">
                <h2 className="text-2xl font-bold mb-4">Popular Instructors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {classes.map((classe, index) => (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={classe.imgURL} alt={classe.imgURL} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-start text-center">
                                <h2 className="card-title">Name: {classe.className}</h2>
                                <p className="card-title text-xl"> Instructor name:  {classe.instructorName}</p>
                                <p className="card-title text-lg"> Available seats: {classe.availableSeats}</p>
                                <p className="card-title text-md"> Price:{classe.price}$</p>
                                <div className="card-actions">
                                    <button onClick={() => handleSelectCourse(classe)} className="btn bg-emerald-200"  >Select</button>
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



// disabled={classe.availableSeats === 0 || isAdmin || isInstructor || isButtonDisabled(classe._id)}

