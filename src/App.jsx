import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import SignupLogin from "./SignupLogin";
import JsonForm from "./JsonForm";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./NotFoundPage"; // Import NotFoundPage

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Ensure Router wraps Routes for proper context */}
      <Navbar />
      <Routes>
        <Route path="/" element={<SignupLogin />} />
        <Route
          path="/jsonform"
          element={
            <ProtectedRoute>
              <JsonForm />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />{" "}
        {/* 404 Not Found Route */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
