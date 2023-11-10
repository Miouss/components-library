"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./chevron";
import { CarrouselItem } from "./carrousel-item";

export default function Carrousel(){
  const [coeff, setCoeff] = useState(0);

  const handleClick = (swipeSide: "left" | "right") => {
    let newCoeff;

    if (swipeSide === "left") {
      if (coeff === 0) newCoeff = 2;
      else newCoeff = coeff - 1;
    } else {
      if (coeff === 2) newCoeff = 0;
      else newCoeff = coeff + 1;
    }

    return setCoeff(newCoeff);
  };

  const translateX = (coeff * 100) / 3;

  return (
    <section className="relative h-screen w-screen lg:max-w-[1184px] lg:max-h-[800px] flex overflow-hidden">
      <ChevronLeft handleClick={handleClick} />
      <ChevronRight handleClick={handleClick} />
      <ul
        className={`relative h-full flex z-1 transition-all duration-500`}
        style={{ transform: `translateX(-${translateX}%)` }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <CarrouselItem number={String(i + 1)} key={i} />
        ))}
      </ul>
    </section>
  );
};
