import React from "react";

// components
import NightLifeCarousel from "./NightCarousel";

const NightLife = () => {
  return (
    <div className="mb-10">
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Nightlife Restaurant in Mumbai
      </h1>
      <NightLifeCarousel />
    </div>
  );
};

export default NightLife;
