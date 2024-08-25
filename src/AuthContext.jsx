import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [email, setEmail] = useState(null);
  const navigate = useNavigate(); // Setup navigate

  useEffect(() => {
    if (authToken) {
      const decoded = jwtDecode(authToken);
      setEmail(decoded.email);
    } else {
      setEmail(null); // Reset email if authToken is not available
    }
  }, [authToken]);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setEmail(null);
    navigate("/"); // Navigate to home after logout
  };

  return (
    <AuthContext.Provider value={{ authToken, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
