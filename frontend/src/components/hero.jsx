// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to Skill Tracker</h1>
      <p>Track your skills and progress easily.</p>
      <button
        onClick={() => navigate("/login")}
        style={{
          padding: "0.5rem 1rem",
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
}
