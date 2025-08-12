import React, { useState } from "react";

function OfferSkill() {
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("You must be logged in to offer a skill.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ skill, description }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || "Error adding skill");
        return;
      }

      setMessage("✅ Skill offered successfully!");
      setSkill("");
      setDescription("");
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Offer a Skill</h2>

        {message && <p className="mb-4">{message}</p>}

        <input
          type="text"
          placeholder="Skill Name"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="w-full p-3 border rounded mb-4"
          required
        />

        <textarea
          placeholder="Skill Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
}

export default OfferSkill;
