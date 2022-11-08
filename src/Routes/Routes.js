import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";
import MainService from "../Pages/Service/MainService";
import ServiceDetails from "../Pages/Service/ServiceDetails";

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
            }
        ]
        
    }

])
export default router;