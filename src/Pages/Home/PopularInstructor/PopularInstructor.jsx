import React from 'react';
import usePopularInstructors from '../../../hooks/usePopularInstructors';



const PopularInstructor = () => {
    const [instructors] = usePopularInstructors()
    console.log(instructors)


    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold mb-4">Popular Instructors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {instructors.slice(0, 6).map((instructor, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src={instructor.image} alt={instructor.image} className="rounded-xl w-[80%] h-60 " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructor.instructorName}</h2>

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
