import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupLogin from "./SignupLogin";
import JsonForm from "./JsonForm";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignupLogin />} />
          <Route path="/jsonform" element={<JsonForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
