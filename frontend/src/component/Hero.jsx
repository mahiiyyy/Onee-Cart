import React from "react";
import {
  FaCircle,
  FaUsers,
  FaShoppingBag,
  FaHeadset,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero({ heroData, heroCount, setHeroCount }) {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-1/2 min-h-screen relative px-6 sm:px-10 lg:px-16 flex flex-col justify-center z-10">

      {/* Badge */}
      <div className="inline-flex w-fit items-center px-5 py-2 rounded-full bg-white shadow-md text-pink-500 text-sm font-semibold">
        ✦ NEW FASHION COLLECTION
      </div>

      {/* Heading */}
      <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold leading-tight lg:leading-[88px]">
        <span className="text-pink-500">
          {heroData.text1}
        </span>

        <br />

        <span className="text-slate-900">
          {heroData.text2}
        </span>
      </h1>

      {/* Subtitle */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-[58px]
          italic
          font-light
          mt-4
          bg-gradient-to-r
          from-pink-500
          to-blue-500
          bg-clip-text
          text-transparent
        "
      >
        Style that speaks
      </h2>

      {/* Description */}
      <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-xl">
        Discover premium styles curated for modern fashion lovers.
        Fresh arrivals, bold looks and trending collections.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">

        <button
          onClick={() => navigate("/collection")}
          className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-full transition duration-300"
        >
          Shop Now →
        </button>

        <button
          onClick={() => navigate("/collection")}
          className="bg-white hover:bg-pink-50 border border-pink-300 text-pink-600 px-7 py-3 rounded-full transition duration-300"
        >
          ▶ Explore Collection
        </button>

      </div>

      {/* Stats */}
      <div
        className="
          mt-12
          bg-white/90
          backdrop-blur-md
          rounded-3xl
          shadow-xl
          p-6
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-6
        "
      >

        {/* Customers */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-pink-500 text-white flex justify-center items-center">
            <FaUsers />
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">
              10K+
            </h2>

            <p className="text-gray-500">
              Happy Customers
            </p>
          </div>
        </div>

        {/* Brands */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex justify-center items-center">
            <FaShoppingBag />
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">
              500+
            </h2>

            <p className="text-gray-500">
              Top Brands
            </p>
          </div>
        </div>

        {/* Support */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-pink-500 text-white flex justify-center items-center">
            <FaHeadset />
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">
              24/7
            </h2>

            <p className="text-gray-500">
              Support
            </p>
          </div>
        </div>

      </div>

      {/* Slider Dots */}
      <div className="mt-10 flex gap-4 justify-center lg:justify-start">

        <FaCircle
          onClick={() => setHeroCount(0)}
          className={`cursor-pointer text-sm transition ${
            heroCount === 0
              ? "text-pink-500 scale-125"
              : "text-pink-200"
          }`}
        />

        <FaCircle
          onClick={() => setHeroCount(1)}
          className={`cursor-pointer text-sm transition ${
            heroCount === 1
              ? "text-blue-500 scale-125"
              : "text-blue-200"
          }`}
        />

      </div>

    </div>
  );
}

export default Hero;
