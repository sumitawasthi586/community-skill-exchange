import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => setShowForm(true), 100); // Fade in after mount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert(data.error || "Login failed"); // <-- Use 'error' instead of 'msg'
      }
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 transition-all duration-1000">
      <form
        onSubmit={handleSubmit}
        className={`max-w-sm w-full p-8 bg-white/80 rounded-2xl shadow-2xl backdrop-blur-md border border-white/30 transform transition-all duration-700 ${
          showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://img.icons8.com/color/96/lock--v1.png"
            alt="Login"
            className="mb-2 animate-bounce"
            style={{ animationDuration: "2s" }}
          />
          <h2 className="text-3xl font-extrabold text-gray-800 mb-1 tracking-tight">
            Welcome Back!
          </h2>
          <p className="text-gray-500 text-sm">Sign in to your account</p>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="block w-full mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-md hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 active:scale-95"
        >
          Login
        </button>
      </form>
    </div>
  );
}
