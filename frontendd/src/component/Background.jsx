import React from "react";
import banner from "../assets/banner.jpeg";
import banner2 from "../assets/banner2.jpeg";

function Background({ heroCount }) {

  const currentImage =
    heroCount === 0 ? banner : banner2;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* LEFT SIDE */}
      <div className="absolute left-0 w-[52%] h-screen bg-gradient-to-br
      from-[#fff8fc]
      via-[#ffeef8]
      to-[#ffdff1]">
      </div>

     {/* CENTER CURVE */}

<div className="absolute left-[49%] top-0 h-screen w-[260px] z-20">

  {/* blue back wave */}
  <svg
    className="absolute h-full w-full left-[25px]"
    viewBox="0 0 220 900"
    preserveAspectRatio="none"
  >
    <path
      d="
      M100,0
      C190,140 190,260 110,420
      C20,580 20,720 120,900
      L0,900
      L0,0
      Z"
      fill="#5B8CFF"
      opacity="0.85"
    />
  </svg>

  {/* pink front wave */}
  <svg
    className="absolute h-full w-full"
    viewBox="0 0 220 900"
    preserveAspectRatio="none"
  >
    <path
      d="
      M100,0
      C170,150 160,260 90,430
      C10,620 30,760 110,900
      L0,900
      L0,0
      Z"
      fill="#ff3f9f"
    />
  </svg>

</div>

      {/* IMAGE RIGHT */}
      <div className="absolute right-0 w-[50%] h-screen overflow-hidden">
        <img
          src={currentImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* top decoration */}
      <div className="absolute top-0 left-[48%]
      w-[130px] h-[120px]
      bg-gradient-to-b
      from-pink-300
      to-blue-400
      rounded-b-full opacity-60">
      </div>

      {/* dot pattern */}
      <div className="absolute top-[70px] left-[25px] grid grid-cols-8 gap-3">
        {[...Array(40)].map((_,i)=>(
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-pink-300"
          />
        ))}
      </div>

    </div>
  );
}

export default Background;