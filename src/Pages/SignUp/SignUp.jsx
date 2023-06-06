

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {  FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 pt-10 pb-10">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/3">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            {...register('name', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">Please enter your name.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">Please enter a valid email.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                {showPassword ? (
                                    <FaEyeSlash
                                        className="text-gray-600 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <FaEye
                                        className="text-gray-600 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </div>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                Password must be at least 6 characters long, contain a capital letter, and a special character.
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            {...register('confirmPassword', {
                                required: true,
                                validate: (value) => value === watch('password'),
                            })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
                            Photo URL
                        </label>
                        <input
                            {...register('photoURL')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photoURL"
                            type="text"
                            placeholder="Enter the URL of your photo"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <Link to='/login'><p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Login
                        </p></Link>
                    </div>
                </form>
                <div className="mt-4">
                    <span className="text-gray-600">Or sign up with:</span>
                    <div className="flex justify-center mt-2">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
