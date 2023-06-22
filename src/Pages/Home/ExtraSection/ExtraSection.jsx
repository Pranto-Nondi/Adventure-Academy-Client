


import React from 'react';

const ExtraSection = () => {
    return (
        <section className="bg-gray-100 py-20 flex items-center ">
            <div className="container mx-auto flex flex-col items-center justify-center align-middle ">
                <h2 className="text-4xl font-bold mb-10">Capture Memories at  Adventure Summer Camp Academy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto p-5  ">
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <svg className="w-10 h-10 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h3 className="text-xl font-bold mb-2">Explore Nature</h3>
                        <p className="text-gray-600">Discover the beauty of the great outdoors while refining your photography skills.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <svg className="w-10 h-10 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8a4 4 0 100 8 4 4 0 000-8zM9 12l2 2 4-4" />
                        </svg>
                        <h3 className="text-xl font-bold mb-2">Learn from Experts</h3>
                        <p className="text-gray-600">Get guidance and tips from professional photographers with years of experience.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <svg className="w-10 h-10 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM12 6V4M12 20v-2M12 3a1 1 0 011-1h7a1 1 0 011 1v17a2 2 0 01-2 2h-6M7 21H4a2 2 0 01-2-2V4a1 1 0 011-1h7a1 1 0 011 1v2" />
                        </svg>
                        <h3 className="text-xl font-bold mb-2">Create Beautiful Memories</h3>
                        <p className="text-gray-600">Capture moments that will last a lifetime and create stunning photographs.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <svg className="w-10 h-10 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
                        </svg>
                        <h3 className="text-xl font-bold mb-2">Fun and Exciting Activities</h3>
                        <p className="text-gray-600">Engage in various activities and challenges to enhance your photography skills.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtraSection;





