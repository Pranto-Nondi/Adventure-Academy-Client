// import { NavLink, Outlet } from "react-router-dom";
// import {  FaWallet,  FaHome, FaUtensils, } from 'react-icons/fa';
// import useAdmin from "../hooks/UseAdmin";
// import useInstructor from "../hooks/useInstructor";

// const Dashboard = () => {


//     const [isAdmin] = useAdmin();
//     const [isInstructor] = useInstructor();

//     return (
//         <div className="drawer drawer-mobile ">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col items-center justify-center">
//                 <Outlet></Outlet>
//                 <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//             </div>
//             <div className="drawer-side bg-[#D1A054]">
//                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//                 <ul className="menu p-4 w-80">

//                     {
//                         isAdmin ? <>
//                             <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
//                             <li><NavLink to="/dashboard/manageClasses"> <FaUtensils></FaUtensils> Manage Classes</NavLink></li>
//                             <li><NavLink to="/dashboard/manageUsers"><FaWallet></FaWallet>Manage Users </NavLink></li>


//                         </> :
//                             isInstructor ? <>
//                                 <li><NavLink to="/dashboard/instructorHome"><FaHome></FaHome> Instructor Home</NavLink></li>
//                                 <li><NavLink to="/dashboard/addClass"> <FaUtensils></FaUtensils>Add  Class</NavLink></li>
//                                 <li><NavLink to="/dashboard/myClasses"><FaWallet></FaWallet> My Classes</NavLink></li>

//                             </> : <>
//                                 <li><NavLink to="/dashboard/studentHome"><FaHome></FaHome> Student Home</NavLink></li>
//                                 <li><NavLink to="/dashboard/selectedClasses"> <FaUtensils></FaUtensils>Selected Classes</NavLink></li>
//                                 <li><NavLink to="/dashboard/enrolledClasses"><FaWallet></FaWallet> Enrolled Classes</NavLink></li>

//                             </>

//                     }
//                     <div className="divider"></div>
//                     <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>

//                 </ul>

//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUtensils } from 'react-icons/fa';
import useAdmin from "../hooks/UseAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="dashboard-layout">
            <div className="dashboard-sidebar">
                <ul className="menu">
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageClasses">
                                    <FaUtensils /> Manage Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers">
                                    <FaWallet /> Manage Users
                                </NavLink>
                            </li>
                        </>
                    )}
                    {isInstructor && (
                        <>
                            <li>
                                <NavLink to="/dashboard/instructorHome">
                                    <FaHome /> Instructor Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addClass">
                                    <FaUtensils /> Add Class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myClasses">
                                    <FaWallet /> My Classes
                                </NavLink>
                            </li>
                        </>
                    )}
                    {!isAdmin && !isInstructor && (
                        <>
                            <li>
                                <NavLink to="/dashboard/studentHome">
                                    <FaHome /> Student Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/selectedClasses">
                                    <FaUtensils /> Selected Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/enrolledClasses">
                                    <FaWallet /> Enrolled Classes
                                </NavLink>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to="/">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
