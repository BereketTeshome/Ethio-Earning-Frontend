import React from "react";

const GlowingBG = () => {
  return (
    <div>
      {/* Glowing circle at the top-left */}
      <div className="absolute z-[0] top-0 left-0 rounded-full w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 blur-3xl opacity-70 animate-pulseGlow"></div>

      {/* Glowing circle at the bottom-right */}
      <div className="absolute z-[0] bottom-0 right-0 rounded-full w-72 h-72 bg-gradient-to-r from-pink-500 to-yellow-500 blur-3xl opacity-70 animate-pulseGlow"></div>
    </div>
  );
};

export default GlowingBG;
