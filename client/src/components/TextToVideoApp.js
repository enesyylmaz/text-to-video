import React, { useState } from "react";
import axios from "axios";

function TextToVideoApp() {
  const [prompt, setPrompt] = useState(
    "A man stands waist-deep in a crystal-clear mountain pool, his back turned to a massive, thundering waterfall that cascades down jagged cliffs behind him. He wears a dark blue swimming shorts and his muscular back glistens with water droplets. The camera moves in a dynamic circular motion around him, starting from his right side and sweeping left, maintaining a slightly low angle that emphasizes the towering height of the waterfall. As the camera moves, the man slowly turns his head to follow its movement, his expression one of awe as he gazes up at the natural wonder. The waterfall creates a misty atmosphere, with sunlight filtering through the spray to create rainbow refractions. The water churns and ripples around him, reflecting the dramatic landscape. The handheld camera movement adds a subtle shake that enhances the raw, untamed energy of the scene. The lighting is natural and bright, with the sun positioned behind the waterfall, creating a backlit effect that silhouettes the falling water and illuminates the mist."
  );
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setVideo(null);
    try {
      const response = await axios.post("/api/text-to-video", { prompt });
      setVideo(response.data.video);
    } catch (err) {
      setError("Failed to generate video. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-gray-100 flex items-center justify-center p-4">
      {/* Main Box */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
        {/* Left Side: Input */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">
            AI Video Generator
          </h1>
          <textarea
            className="w-full p-5 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-4 focus:ring-purple-500 placeholder-gray-400 transition-all"
            placeholder="Describe the video you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows="8"
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className={`mt-6 w-full py-3 rounded-lg font-semibold text-gray-100 transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500 ${
              loading || !prompt
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-red-600"
            }`}
          >
            {loading ? "Generating..." : "Generate Video"}
          </button>
          {error && (
            <p className="text-red-500 mt-4 text-center font-medium animate-pulse">
              {error}
            </p>
          )}
        </div>

        {/* Right Side: Video */}
        <div className="w-full md:w-1/2 bg-gray-900 flex items-center justify-center p-4">
          {video ? (
            <video
              className="w-full max-w-lg rounded-lg border border-gray-700 shadow-lg"
              src={video.url}
              controls
              autoPlay
              loop
            />
          ) : (
            <p className="text-gray-400">No video generated yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextToVideoApp;
