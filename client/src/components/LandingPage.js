import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-6xl font-extrabold tracking-tight text-white">
          Welcome to AI Video Generator
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Transform your imagination into reality with AI-generated videos.
        </p>
      </header>

      {/* Main Content */}
      <main className="mt-12">
        <button
          onClick={() => navigate("/app")}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-purple-500 transition transform hover:scale-105"
        >
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} AI Video Generator. All Rights
        Reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
