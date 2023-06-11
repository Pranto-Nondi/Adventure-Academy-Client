import React from 'react';


const InstructorHome = () => {

    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">Welcome, Instructor!</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">Manage Classes</h2>
                            {/* Add class management options */}
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">Student Attendance</h2>
                            {/* Add attendance management options */}
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Class Schedule</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Add class schedule content */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default InstructorHome;