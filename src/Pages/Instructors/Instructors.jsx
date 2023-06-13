import React from "react";
import usePopularInstructors from "../../hooks/usePopularInstructors";



const Instructors = () => {
    const [instructors] = usePopularInstructors()
    console.log(instructors)

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6">Top Instructor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructors?.slice(0,6).map((instructor) => (
                    <div
                        key={instructor._id}
                        className="card card-compact w-96 bg-base-100 shadow-xl"
                    >
                        <figure>
                            <img className="w-[60%] h-56" src={instructor?.image} alt={instructor.image} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {instructor.instructorName}</h2>
                            <p className="card-title text-lg"> Email: {instructor.instructorEmail}$</p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-emerald-100">View Profile</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // <div className="container mx-auto my-10">
        //     <h2 className="text-3xl font-bold mb-6">Popular Instructor</h2>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        //         {instructors?.map((instructor) => (
        //             <div key={instructor._id} className="card card-compact bg-base-100 shadow-xl">
        //                 <figure className="flex justify-center items-center">
        //                     <img className="w-[60%] h-56 object-cover" src={instructor?.image} alt={instructor.image} />
        //                 </figure>
        //                 <div className="card-body">
        //                     <h2 className="card-title">Name: {instructor.instructorName}</h2>
        //                     <p className="card-title text-lg">Email: {instructor.instructorEmail}</p>
        //                     <div className="card-actions justify-start">
        //                         <button className="btn bg-emerald-100">View Profile</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default Instructors;

