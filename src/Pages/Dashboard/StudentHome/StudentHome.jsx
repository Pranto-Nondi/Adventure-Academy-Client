import React from 'react';

const StudentHome = () => {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">Welcome, Student!</h1>
                    <p className="mb-8">
                        View available classes and select courses.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">Upcoming Classes</h2>
                            {/* Add upcoming classes content */}
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">My Schedule</h2>
                            {/* Add student's schedule content */}
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {/* Add recommended courses content */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentHome;