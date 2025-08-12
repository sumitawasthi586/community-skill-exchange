import React from "react";
import { useNavigate } from "react-router-dom";

const ManageSkill = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 flex flex-col items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Manage Skills
        </h1>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/add-skill")}
            className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-400 shadow-lg hover:shadow-green-500/50 transition transform hover:scale-105"
          >
            ➕ Add Skill
          </button>

          <button
            onClick={() => navigate("/manage-skill/list")}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-400 shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
          >
            📋 Show Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageSkill;
