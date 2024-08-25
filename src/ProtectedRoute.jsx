import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Make sure the path is correct

const ProtectedRoute = ({ children }) => {
  const { authToken } = useAuth(); // Assuming authToken is stored in your AuthContext
  const location = useLocation();

  if (!authToken) {
    // Redirect to the login page but save the intended location they were trying to access
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
