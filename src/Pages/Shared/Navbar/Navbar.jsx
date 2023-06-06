


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleRouteClick = () => {
        setIsMenuOpen(false);
    };

    const getLinkClassName = (route) => {
        const isActiveRoute = location.pathname === route.path;
        return `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActiveRoute ? 'bg-gray-700 text-white' : ''
            }`;
    };

    const routes = [
        { name: 'Home', path: '/' },
        { name: 'Instructors', path: '/instructors' },
        { name: 'Classes', path: '/classes' },
        { name: 'Login', path: '/login' },
    ];

    return (
        <nav className="bg-gray-700">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center justify-start flex-shrink-0">
                        <Link to="/" className="text-white text-xl font-bold">
                            SummerCampPhoto
                        </Link>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            {routes.map((route, index) => (
                                <Link
                                    key={index}
                                    to={route.path}
                                    className={getLinkClassName(route)}
                                    onClick={handleRouteClick}
                                >
                                    {route.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex sm:hidden">
                        <button
                            type="button"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden bg-gray-800">
                    <div className="px-2 pt-2 pb-3">
                        <div className="flex flex-col items-center">
                            {routes.map((route, index) => (
                                <Link
                                    key={index}
                                    to={route.path}
                                    className={getLinkClassName(route)}
                                    onClick={handleRouteClick}
                                >
                                    {route.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
