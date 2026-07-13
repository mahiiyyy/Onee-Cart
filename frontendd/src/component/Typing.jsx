import React from "react";

function Typing() {
  return (
    <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-md w-fit">

      <div
        className="w-2 h-2 rounded-full bg-pink-500 animate-bounce"
        style={{ animationDelay: "0s" }}
      />

      <div
        className="w-2 h-2 rounded-full bg-pink-500 animate-bounce"
        style={{ animationDelay: "0.2s" }}
      />

      <div
        className="w-2 h-2 rounded-full bg-pink-500 animate-bounce"
        style={{ animationDelay: "0.4s" }}
      />

    </div>
  );
}

export default Typing;