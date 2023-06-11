
import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUtensils } from 'react-icons/fa';

import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import NavBar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <>
            <NavBar />
            <div className="flex h-screen ">
                <div className="w-1/4 bg-gray-200 pt-5 ">
                    <div className="p-5">
                        <ul className="space-y-10">
                            {isAdmin && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/adminHome"
                                           
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaHome />
                                            <span className="font-bold">Admin Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageClasses"
                                        
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaUtensils />
                                            <span className="font-bold">Manage Classes</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageUsers"
                                          
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaWallet />
                                            <span className="font-bold">Manage Users</span>
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {isInstructor && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/instructorHome"
                                         
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaHome />
                                            <span className="font-bold">Instructor Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/addClass"
                                          
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaUtensils />
                                            <span className="font-bold">Add Class</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myClasses"
                                        
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaWallet />
                                            <span className="font-bold">My Classes</span>
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {!isAdmin && !isInstructor && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/studentHome"
                                           
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaHome />
                                            <span className="font-bold">Student Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/selectedClasses"
                                           
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaUtensils />
                                            <span className="font-bold">Selected Classes</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/enrolledClasses"
                                         
                                            className="flex items-center space-x-2 text-blue-500"
                                        >
                                            <FaWallet />
                                            <span className="font-bold">Enrolled Classes</span>
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            <li>
                                <NavLink
                                    to="/"
                                    
                                  
                                    className="flex items-center space-x-2 text-blue-500"
                                >
                                    <FaHome />
                                    <span className="font-bold">Home</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-3/4 bg-white">
                    <Outlet />

                </div>
            </div>
          
            <Footer />
        </>
    );
};

export default Dashboard;
