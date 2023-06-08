

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const renderDashboardLink = () => {
        if (user) {
            return <>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </>;
        }
        return null;
    };






    const renderAuthOptions = () => {
        if (user) {
            return (
                <li> <button onClick={handleLogOut} >LogOut</button></li>
            );
        } else {
            return (
                <li><Link to="/login">Login</Link></li>
            );
        }
    }

    return (
        <>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/instructors">Instructors</Link></li>
                            <li><Link to="/Classes">Classes</Link></li>
                            {renderDashboardLink()}
                            {renderDashboardLink()}

                            {renderAuthOptions()}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">CampSnapPhotoGrapy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/instructors">Instructors</Link></li>
                        <li><Link to="/Classes">Classes</Link></li>
                        {renderDashboardLink()}

                        {renderAuthOptions()}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img
                                src={user?user?.photoURL:"https://i.ibb.co/3fMBDSH/u.png"}
                                className="w-full h-full rounded-full"
                                alt="User Avatar"
                            />
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
}
export default NavBar;
