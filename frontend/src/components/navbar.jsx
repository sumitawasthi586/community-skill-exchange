import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link to="/">Login</Link>
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/offer-skill">Offer Skill</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
