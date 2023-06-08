// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router";
// import { AuthContext } from "../provider/AuthProvider";


// const PrivateRoute = ({ children }) => {
//     const { user, loading } = useContext(AuthContext);
//     const location = useLocation();

//     if (loading) {
//         return <progress className="progress w-56 "></progress>
//     }

//     if (user) {
//         return children;
//     }
//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>
// };

// export default PrivateRoute;


import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
        );
    }

    if (user?.email) {
        return children;
    }

    const handleNavigate = () => {
        Swal.fire({
            title: 'Please Login ',
            text: 'After SuccessFully Login You have to access ',
            icon: 'warning',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/login', { state: { from: location }, replace: true });
        });
    };

    return handleNavigate();
};

export default PrivateRoute;







