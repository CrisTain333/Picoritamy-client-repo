import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/Context";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <section class=" relative place-items-center grid my-40 gap-4">   

  <div class="bg-gray-500 w-44 h-44 absolute animate-ping rounded-full delay-5s shadow-xl"></div>

  <div class="bg-gray-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
 
  <div class="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

    {/* <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-900 filter mix-blend-overlay h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> */}
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin "></div>
  {/* <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg> */}
</section>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
