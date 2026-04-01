import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/Dashboard";
import StatusPage from "./components/StatusPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 Login Page */}
        <Route path="/" element={<Login />} />

        {/* 📝 Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* 📊 Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* 📈 Status Page */}
        <Route path="/status" element={<StatusPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;