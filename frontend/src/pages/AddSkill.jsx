import React, { useState } from "react";
import axios from "axios";

export default function AddSkill({ userId }) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Beginner");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/skills/add", {
        name,
        level,
        userId
      });
      alert("Skill Added!");
      setName("");
      setLevel("Beginner");
    } catch (err) {
      console.error(err);
      alert("Error adding skill");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Skill</h2>
      <input
        type="text"
        placeholder="Skill Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Expert</option>
      </select>
      <button type="submit">Add Skill</button>
    </form>
  );
}
