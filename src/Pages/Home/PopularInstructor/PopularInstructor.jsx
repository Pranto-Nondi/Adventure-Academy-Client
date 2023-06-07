import React from 'react';
import usePopularInstructors from '../../../hooks/usePopularInstructors';



const PopularInstructor = () => {
    const [instructors] = usePopularInstructors()


    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold mb-4">Popular Instructors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {instructors.map((instructor, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://media.photographycourse.net/wp-content/uploads/2022/06/08135516/person-taking-photographs-outdoors.jpg" alt={instructor.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>{instructor.specialty}</p>
                            <div className="card-actions">
                                <button className="btn bg-emerald-200">View profile</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularInstructor;
