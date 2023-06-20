// import React from 'react';
// import usePopularInstructors from '../../../hooks/usePopularInstructors';

// const PopularInstructor = () => {
//     const [instructors] = usePopularInstructors()
//     console.log(instructors)


//     return (
//         <section className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Popular Instructors</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {instructors.slice(0, 6).map((instructor, index) => (
//                     <div key={index} className="card w-96 bg-base-100 shadow-xl">
//                         <figure className="px-10 pt-10 ">
//                             <img src={instructor.image} alt={instructor.image} className="rounded-xl w-[90%] h-60 " />
//                         </figure>
//                         <div className="card-body items-center text-center">
//                             <h2 className="card-title text-2xl">{instructor.instructorName}</h2>

//                             <div className="card-actions">
//                                 <button className="btn bg-emerald-200">View profile</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default PopularInstructor;



import React from 'react';
import usePopularInstructors from '../../../hooks/usePopularInstructors';

const PopularInstructor = () => {
    const [instructors] = usePopularInstructors();

    return (
        <section className="p-4 pb-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Instructors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {instructors.slice(0, 6).map((instructor, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-xl rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
                    >
                        <img
                            src={instructor.image}
                            alt={instructor.image}
                            className="w-full h-60 object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">{instructor.instructorName}</h2>
                            <div className="flex justify-center">
                                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-emerald-600">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularInstructor;

