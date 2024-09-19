import React from "react";

const GlowingBG = () => {
  return (
    <div>
      {/* Glowing circle at the top-left */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-70 animate-pulseGlow"></div>

      {/* Glowing circle at the bottom-right */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-70 animate-pulseGlow"></div>
    </div>
  );
};

export default GlowingBG;