

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = (data) => {
        // Include instructor name and email in the submitted data
        data.instructorName = user.displayName;
        data.instructorEmail = user.email;
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.classImage
        [0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { className, price,availableSeats, instructorName,instructorEmail} = data;
                    const newItem = { className, price: parseFloat(price), availableSeats,instructorName,instructorEmail,  image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

        // Handle form submission and data processing here

        // Clear form fields after submission
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
                        className={`w-full px-3 py-2 border ${errors?.className ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none`}
                        {...register("className", { required: true })}
                    />
                    {errors.className && <p className="text-red-500 text-sm mt-1">Class Name is required</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="classImage" className="block text-sm font-medium text-gray-700 mb-2">
                        Class Image
                    </label>
                    <input
                        type="file"
                        id="classImage"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                        {...register("classImage")}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="availableSeats" className="block text-sm font-medium text-gray-700 mb-2">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        id="availableSeats"
                        className={`w-full px-3 py-2 border ${errors?.availableSeats ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none`}
                        {...register("availableSeats", { required: true })}
                    />
                    {errors.availableSeats && <p className="text-red-500 text-sm mt-1">Available Seats is required</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className={`w-full px-3 py-2 border ${errors?.price ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none`}
                        {...register("price", { required: true })}
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">Price is required</p>}
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
                        className="bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded"
                    >
                        Add Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;
