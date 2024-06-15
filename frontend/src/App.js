import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Classes from "./pages/Classes";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
