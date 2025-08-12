// src/pages/Skills.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Skills Management</h1>
      <p>Choose an option below:</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/add-skill")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          ➕ Add Skill
        </button>
        <button
          onClick={() => navigate("/manage-skill/list")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          📜 View Skills
        </button>
      </div>
    </div>
  );
}
