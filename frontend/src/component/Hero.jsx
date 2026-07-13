import React from "react";
import { FaCircle, FaPlay, FaUsers, FaShoppingBag, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero({ heroData, heroCount, setHeroCount }) {
  const navigate = useNavigate();
  return (
    <div className="w-[50%] h-screen relative px-16">

      <div className="absolute top-[18%]">

        {/* badge */}
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-white shadow-md text-pink-500 text-sm font-semibold">
          ✦ NEW FASHION COLLECTION
        </div>

        {/* heading */}
        <h1 className="text-[85px] font-bold leading-[88px] mt-8">

          <span className="text-[#ff008c]">
            {heroData.text1}
          </span>

          <br />

          <span className="text-[#0f172a]">
            {heroData.text2}
          </span>

        </h1>

        {/* subtitle */}

        <h2
          className="
          text-[58px]
          italic
          font-light
          mt-2
          bg-gradient-to-r
          from-[#ff008c]
          to-[#4f8cff]
          bg-clip-text
          text-transparent"
        >
          Style that speaks
        </h2>

        {/* description */}

        <p className="mt-8 text-gray-500 text-lg max-w-[550px]">
          Discover premium styles curated for modern fashion lovers.
          Fresh arrivals, bold looks and trending collections.
        </p>

        {/* buttons */}

        <div className="flex gap-6 mt-10">

          <button
  onClick={() => navigate("/collection")}
  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
>
  Shop Now →
</button>

          <button
  onClick={() => navigate("/collection")}
  className="bg-white hover:bg-pink-50 border border-pink-300 text-pink-600 px-6 py-3 rounded-full transition"
>
  ▶ Explore Collection
</button>

        </div>

        {/* stats card */}

        <div className="
        mt-16
        bg-white/90
        rounded-[30px]
        shadow-xl
        p-8
        flex
        gap-12">

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-full bg-pink-500 text-white flex justify-center items-center">
              <FaUsers />
            </div>

            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-500">
                Happy Customers
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-full bg-[#4f8cff] text-white flex justify-center items-center">
              <FaShoppingBag />
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-500">
                Top Brands
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-full bg-pink-500 text-white flex justify-center items-center">
              <FaHeadset />
            </div>

            <div>
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-gray-500">
                Support
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* slider dots */}

      <div className="absolute bottom-[40px] left-[65px] flex gap-4">

        <FaCircle
          onClick={() => setHeroCount(0)}
          className={`cursor-pointer text-[14px]
          ${
            heroCount === 0
              ? "text-pink-500 scale-125"
              : "text-pink-200"
          }`}
        />

        <FaCircle
          onClick={() => setHeroCount(1)}
          className={`cursor-pointer text-[14px]
          ${
            heroCount === 1
              ? "text-[#4f8cff] scale-125"
              : "text-blue-200"
          }`}
        />

      </div>

    </div>
  );
}

export default Hero;