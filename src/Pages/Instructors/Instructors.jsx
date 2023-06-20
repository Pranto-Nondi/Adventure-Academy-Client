// import React from "react";
// import usePopularInstructors from "../../hooks/usePopularInstructors";



// const Instructors = () => {
//     const [instructors] = usePopularInstructors()
//     console.log(instructors)

//     return (
//         <div className="container mx-auto my-10">
//             <h2 className="text-3xl font-bold mb-6">Top Instructor</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {instructors?.map((instructor) => (
//                     <div
//                         key={instructor._id}
//                         className="card card-compact w-96 bg-base-100 shadow-xl"
//                     >
//                         <figure>
//                             <img className="w-[60%] h-56" src={instructor?.image} alt={instructor.image} />
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">Name: {instructor.instructorName}</h2>
//                             <p className="card-title text-lg"> Email: {instructor.instructorEmail}</p>
//                             <div className="card-actions justify-start">
//                                 <button className="btn bg-emerald-100">View Profile</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     );
// };

// export default Instructors;

import React from "react";
import usePopularInstructors from "../../hooks/usePopularInstructors";

const Instructors = () => {
    const [instructors] = usePopularInstructors();

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Top Instructors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {instructors?.map((instructor) => (
                    <div
                        key={instructor._id}
                        className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
                    >
                        <figure>
                            <img
                                className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-75"
                                src={instructor?.image}
                                alt={instructor.image}
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{instructor.instructorName}</h2>
                            <p className="text-lg text-gray-700">Email: {instructor.instructorEmail}</p>
                            <div className="flex justify-center mt-4">
                                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-emerald-600">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructors;
