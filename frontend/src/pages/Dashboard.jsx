import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-white/20 p-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div>
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">
              Welcome, Explorer!
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Navigate your skills, offers, and account with style.
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="https://img.icons8.com/color/96/rocket--v1.png"
              alt="Dashboard"
              className="w-20 h-20 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Your Skills Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all flex flex-col items-center text-center border border-white/20">
            <img src="https://img.icons8.com/color/48/brain.png" alt="Skills" className="mb-3" />
            <h2 className="text-2xl font-bold text-indigo-400 mb-2">Your Skills</h2>
            <p className="text-base text-gray-300 mb-4">View and manage the skills you have listed.</p>
            <button
              onClick={() => navigate("/skills")}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition"
            >
              Manage Skills
            </button>
          </div>

          {/* New Offers Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all flex flex-col items-center text-center border border-white/20">
            <img src="https://img.icons8.com/color/48/gift.png" alt="Offers" className="mb-3" />
            <h2 className="text-2xl font-bold text-purple-400 mb-2">New Offers</h2>
            <p className="text-base text-gray-300 mb-4">See skill offers that match your profile.</p>
            <button
              onClick={() => navigate("/offers")}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(168,85,247,0.8)] transition"
            >
              View Offers
            </button>
          </div>

          {/* Account Settings Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all flex flex-col items-center text-center border border-white/20">
            <img src="https://img.icons8.com/color/48/settings--v1.png" alt="Settings" className="mb-3" />
            <h2 className="text-2xl font-bold text-pink-400 mb-2">Account Settings</h2>
            <p className="text-base text-gray-300 mb-4">Update your profile and preferences.</p>
            <button
              onClick={() => navigate("/profile")}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
