import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/404 Page/ErrorPage";
import AddService from "../Pages/AddService/AddService";
import MainAbout from "../Pages/About/MainAbout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";
import MyReviews from "../Pages/Reviews/MyReviews";
import UpdateReview from "../Pages/Reviews/UpdateReview";
import MainService from "../Pages/Service/MainService";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import ProtectedRoute from "./ProtectedRoute";
import MainGallery from "../Pages/Gallery/MainGallery";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <MainService />,
      },
      {
        path: "/services/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://picoritamy-server.vercel.app/services/${params.id}`
          );
        },
        element: <ServiceDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/reviews",
        element: (
          <ProtectedRoute>
            <MyReviews />
          </ProtectedRoute>
        ),
      },
      {
        path: "/review/update/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://picoritamy-server.vercel.app/review/update/${params.id}`
          );
        },
        element: <UpdateReview />,
      },
      {
        path: "/add/service",
        element: (
          <ProtectedRoute>
            <AddService />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <MainAbout />,
      },
      {
        path:'/gallery',
       element: <MainGallery />
      },
      {
        path:'/blog',
        element: <Blog />

      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
