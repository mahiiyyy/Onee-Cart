import React, { useState } from "react";

import Background from "../component/Background";
import Hero from "../component/Hero";
import LatestCollection from "../component/LatestCollection";
import BestSeller from "../component/BestSeller";

function Home() {

  const heroData = [
    {
      text1: "30% OFF Limited Offer",
      text2: "Style that speaks",
    },
    {
      text1: "Discover Bold Fashion",
      text2: "Limited Time Only!",
    },
    {
      text1: "Explore New Collection",
      text2: "Shop Now!",
    },
    {
      text1: "Choose Your Perfect Fit",
      text2: "Now on Sale!",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);

  return (
    <>

      <div className="w-screen h-screen relative overflow-x-hidden">

        <Background heroCount={heroCount} />

        <div className="absolute inset-0 z-10">

          <Hero
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
          />

        </div>

      </div>

      <LatestCollection />

      <BestSeller />

    </>
  );
}

export default Home;