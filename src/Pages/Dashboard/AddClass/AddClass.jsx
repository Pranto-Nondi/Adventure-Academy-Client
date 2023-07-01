

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        const { className, availableSeats, price } = data;
        const newItem = {
            className,
            imgURL: data.imgURL, // Use the imgURL field from the form data
            instructorName: user.displayName,
            instructorEmail: user.email,
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price),
            status: "pending",
            enrolledStudents:0
        };
        const instructor = {
            instructorName: user.displayName,
            instructorEmail: user.email,
            image: user?.photoURL,

        };
        axios.post('https://summer-camp-phograpy-school-server.vercel.app/instructors', instructor, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const data = response.data;
                if (data.insertedId) {
                    refetch();

                }
            })
            .catch(error => {
                // Handle the error here
            });
        try {
            const classResponse = await axiosSecure.post("/class", newItem);
            console.log(classResponse)
            if (classResponse.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Class added ",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-2 px-5 bg-white rounded shadow">
            <h2 className="text-2xl text-center font-bold mb-4">Add a Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="className" className="block text-sm font-medium text-gray-700 mb-2">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        className={`w-full px-3 py-2 border ${errors?.className ? "border-red-500" : "border-gray-300"
                            } rounded-md focus:outline-none`}
                        {...register("className", { required: true })}
                    />
                    {errors.className && (
                        <p className="text-red-500 text-sm mt-1">Class Name is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="imgURL" className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="imgURL"
                        className={`w-full px-3 py-2 border ${errors?.imgURL ? "border-red-500" : "border-gray-300"
                            } rounded-md focus:outline-none`}
                        {...register("imgURL", { required: true })}
                    />
                    {errors.imgURL && (
                        <p className="text-red-500 text-sm mt-1">Image URL is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="availableSeats" className="block text-sm font-medium text-gray-700 mb-2">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        id="availableSeats"
                        className={`w-full px-3 py-2 border ${errors?.availableSeats ? "border-red-500" : "border-gray-300"
                            } rounded-md focus:outline-none`}
                        {...register("availableSeats", { required: true })}
                    />
                    {errors.availableSeats && (
                        <p className="text-red-500 text-sm mt-1">Available Seats is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className={`w-full px-3 py-2 border ${errors?.price ? "border-red-500" : "border-gray-300"
                            } rounded-md focus:outline-none`}
                        {...register("price", { required: true })}
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm mt-1">Price is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructor Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                        value={user.displayName}
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructor Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                        value={user.email}
                        readOnly
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;

