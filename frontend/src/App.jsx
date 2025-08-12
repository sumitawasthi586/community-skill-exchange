import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Dashboard from "./pages/Dashboard";
import OfferSkill from "./pages/OfferSkill";
import Login from "./pages/Login"; // ✅ make sure file exists
import Skills from "./pages/Skills";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import ManageSkill from "./pages/ManageSkill";
import AddSkill from "./pages/AddSkill";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route is login */}
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/offer-skill" element={<OfferSkill />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manage-skill" element={<ManageSkill />} />
        <Route path="/add-skill" element={<AddSkill />} />
      

      </Routes>
    </>
  );
}

export default App;
