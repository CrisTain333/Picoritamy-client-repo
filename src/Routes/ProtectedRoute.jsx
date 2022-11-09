import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/Context";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center space-x-2 w-full">
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-500"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-500"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-500"></div>
        </div>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
