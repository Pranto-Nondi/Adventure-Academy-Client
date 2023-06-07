


import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-gray-100">
            <div className="container mx-auto py-10 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-bold mb-4">Summer Camp Photography School</h2>
                        <p className="text-gray-300 mb-4">
                            Capture the beauty of the world through the lens at our Summer Camp Photography School. Join us for an unforgettable experience .

                        </p>
                        <div className="flex items-center space-x-4">
                            <svg
                                className="w-6 h-6 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.293 7.293a1 1 0 010-1.414L8.586.293a1 1 0 011.414 0l6.293 6.293a1 1 0 010 1.414l-6.293 6.293a1 1 0 01-1.414 0L2.293 8.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p>123 Street, City, Country</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                            <svg
                                className="w-6 h-6 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p>+1 123 456 7890</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Photography Workshops
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Nature Photography
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Portrait Photography
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Editing and Post-processing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold mb-4">About</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold mb-4">Legal</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-500">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Summer Camp Photography School. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-indigo-500">
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm3.293 8.707l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-indigo-500">
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M17 4h-2.618a2 2 0 00-1.789 1.105l-1.447 2.895A2 2 0 0010.765 10H8.618l-.897 4.485A2 2 0 006.735 16H4a2 2 0 01-2-2V6a2 2 0 012-2h13a2 2 0 012 2v3a2 2 0 01-2 2h-1v-2h1a1 1 0 001-1V6a1 1 0 00-1-1zM4 12h2v2H4v-2zm4 0h2v2H8v-2zm-4 2h2v2H4v-2zm4 0h2v2H8v-2zm6-7h-1.618a2 2 0 01-1.789-1.105L14.146 2.1A2 2 0 0115.765 2H18a2 2 0 012 2v3a2 2 0 01-2 2h-2v-2h2a1 1 0 001-1V6a1 1 0 00-1-1h-2.765a2 2 0 00-1.789 1.105L13.382 7H11.235l-.897 4.485A2 2 0 018.735 13H6a2 2 0 00-2 2v3a2 2 0 002 2h7a2 2 0 002-2v-3a2 2 0 00-2-2h-1v2h1a1 1 0 001-1v-3a1 1 0 00-1-1zm-6 2H8v2h2v-2zm4 0h-2v2h2v-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-indigo-500">
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.293 8.707a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414L11.414 11l1.293 1.293a1 1 0 01-1.414 1.414L10 12.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 11 7.293 9.707a1 1 0 010-1.414zM7 6a1 1 0 012 0v2a1 1 0 11-2 0V6zm0 8a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 012 0v2a1 1 0 11-2 0V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
