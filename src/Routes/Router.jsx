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
import instructorRoute from "./InstructorRoute"
import AdminRoute from "./AdminRoute";

import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import InstructorRoute from "./InstructorRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import MyClasses from "../Pages/Dashboard/Myclasses/MyClasses";
import UpdateClass from "../Pages/Dashboard/UpadateClass/UpdateClass";


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
            {
                path: 'selectedClasses',
                element: <SelectedClasses />,
            },

            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses />,
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />,
            },

            {
                path: 'instructorHome',
                element: <InstructorRoute><InstructorHome /></InstructorRoute>
            },
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass /></InstructorRoute>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute><MyClasses /></InstructorRoute>
            },
            {
                path: 'updateClass/:id',
                element: <InstructorRoute><UpdateClass /></InstructorRoute>
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            }


        ]
    }

]);
export default router