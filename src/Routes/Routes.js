import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";
import MyReviews from "../Pages/Reviews/MyReviews";
import UpdateReview from "../Pages/Reviews/UpdateReview";
import MainService from "../Pages/Service/MainService";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/services',
                element:<MainService />
            },
            {
                path:'/services/:id',
                loader: async({params})=>{
                    return fetch(`http://localhost:5000/services/${params.id}`)
            },
                element: <ServiceDetails />

            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/singup',
                element: <SingUp/>
            },
            {
                path:'/reviews',
                 element :<ProtectedRoute><MyReviews /></ProtectedRoute>
            },
            {
                path:'/review/update/:id',
                loader: async({params})=>{
                    return fetch(`http://localhost:5000/review/update/${params.id}`)
                },
                element: <UpdateReview />
            },
            {
                path:'/add/service',
                element: <ProtectedRoute><AddService /></ProtectedRoute>

            }
        ]
        
    }

])
export default router;