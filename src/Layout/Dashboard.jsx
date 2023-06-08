
import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUtensils } from 'react-icons/fa';
import useAdmin from "../hooks/UseAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="flex h-screen ">
            <div className="w-1/4 bg-gray-200 pt-5 ">
                <div className="p-5">
                    <ul className="space-y-10">
                        {isAdmin && (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/adminHome"
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
                                    >
                                        <FaHome />
                                        <span className="font-bold">Admin Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manageClasses"
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
                                    >
                                        <FaUtensils />
                                        <span className="font-bold">Manage Classes</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manageUsers"
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
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
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
                                    >
                                        <FaHome />
                                        <span className="font-bold">Instructor Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/addClass"
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
                                    >
                                        <FaUtensils />
                                        <span className="font-bold">Add Class</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/myClasses"
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
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
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
                                    >
                                        <FaHome />
                                        <span className="font-bold">Student Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/selectedClasses"
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
                                    >
                                        <FaUtensils />
                                        <span className="font-bold">Selected Classes</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/enrolledClasses"
                                        activeClassName="text-blue-500"
                                        className="flex items-center space-x-2"
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
                                exact
                                activeClassName="text-blue-500"
                                className="flex items-center space-x-2"
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
    );
};

export default Dashboard;
