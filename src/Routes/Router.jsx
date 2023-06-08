import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes"
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'classes',
                element: <Classes />
            }



        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'studentHome',
                element: <StudentHome />
            },
            // {
            //     path: "mycart",
            //     element: <MyCart />,
            // },
            // {
            //     path: 'payment',
            //     element: <Payment />
            // },
            // // admin routes

            {
                path: 'instructorHome',
                element: <InstructorRoute><InstructorHome /></InstructorRoute>
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            // {
            //     path: 'allusers',
            //     element: <AdminRoute><AllUsers /></AdminRoute>
            // },
            // {
            //     path: 'addItem',
            //     element: <AdminRoute><AddItem /></AdminRoute>
            // },
            // {
            //     path: 'manageitems',
            //     element: <AdminRoute><ManageItems /></AdminRoute>
            // }


        ]
    }

]);
export default router