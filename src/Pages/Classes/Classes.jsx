import React from 'react';
import useAuth from '../../hooks/useAuth';
import usePopularInstructors from '../../hooks/usePopularInstructors';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';


const Instructors = () => {
    const [instructors] = usePopularInstructors();
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleSelectCourse = (course) => {
        if (!user) {
            
            Swal.fire({
                title: 'Please Login',
                text: "After SuccessFully Login You have to access",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace: true });
                   
                }
            })

        }

        // Handle course selection logic here
    };

    return (
        <div className="overflow-x-auto">
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
                    {instructors.slice(0, 6).map((singleInstructor, index) => (
                        <tr key={singleInstructor._id} >
                            <th>{index + 1}</th>
                            <td>{singleInstructor.name}</td>
                            <td>Not Avalaible</td>
                            <td>{singleInstructor.instructor}</td>
                            <td>{singleInstructor.availableSeats}</td>
                            <td>{singleInstructor.price}</td>

                            <td><button className='btn ' onClick={() => handleSelectCourse(singleInstructor)} >select</button></td>
                        </tr>
                    ))}
                </tbody>


            </table>
        </div>
    );
};

export default Instructors;
