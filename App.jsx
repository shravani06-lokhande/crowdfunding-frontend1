import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import CreateCampaign from "./pages/CreateCampaign";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
      </Routes>
    </>
  );
};

export default App;
