import React from "react";
import usePopularClass from "../../../hooks/usePopularClass";

const PopularClasses = () => {
    const [classes] = usePopularClass()
    // console.log(classes)

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6">Popular Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.slice(0, 6).map((classItem) => (
                    <div
                        key={classItem._id}
                        className="card card-compact w-96 bg-base-100 shadow-xl"
                    >
                        <figure>
                            <img src="https://media.istockphoto.com/id/1395305908/photo/group-of-children-and-teacher-playing-with-rainbow-playground-parachute-on-green-grass-summer.jpg?s=612x612&w=0&k=20&c=eEaYgcasw-oEmyu0VdGxKp2JpzVJWWO6eEQ6SAGWKEU=" alt={classItem.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{classItem.name}</h2>
                            <p>{classItem.description}</p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-emerald-100">Learn More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;

