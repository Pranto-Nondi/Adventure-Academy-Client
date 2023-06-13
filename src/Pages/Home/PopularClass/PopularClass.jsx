import React from "react";
import usePopularClass from "../../../hooks/usePopularClass";

const PopularClasses = () => {
    const [classes] = usePopularClass()


    return (
        <div className="container mx-auto my-10 px-2">
            <h2 className="text-3xl font-bold mb-6">Popular Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.slice(0, 6).map((classItem) => (
                    <div
                        key={classItem._id}
                        className="card card-compact w-96 bg-base-100 shadow-xl"
                    >
                        <figure>
                            <img src={classItem?.imgURL} alt={classItem.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"> {classItem.className}</h2>
                            <p className="text-lg">Price: {classItem.price}$</p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-emerald-100">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;

