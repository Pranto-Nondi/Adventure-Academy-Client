


import React from "react";
import usePopularClass from "../../../hooks/usePopularClass";

const PopularClasses = () => {
    const [classes] = usePopularClass();

    // Sort the classes array based on enrolledStudents in descending order
    const sortedClasses = classes.sort((a, b) => b.enrolledStudents - a.enrolledStudents);

    return (
        <div className="container mx-auto my-10 px-2">
            <h2 className="text-3xl font-bold mb-6 text-center">Popular Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedClasses.slice(0, 6).map((classItem) => (
                    <div
                        key={classItem._id}
                        className="w-96 bg-base-100 shadow-xl rounded-lg p-6 overflow-hidden transition-transform duration-300 transform-gpu hover:scale-105"
                    >
                        <figure>
                            <img src={classItem?.imgURL} alt={classItem.title} />
                        </figure>
                        <div className="mt-4">
                            <h2 className="text-lg font-bold">{classItem.className}</h2>
                            <p className="text-lg">Price: {classItem.price}$</p>
                            <p className="text-md">Enrolled Students: {classItem.enrolledStudents}</p>
                            <div className="flex justify-start mt-4">
                                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-emerald-600">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;
