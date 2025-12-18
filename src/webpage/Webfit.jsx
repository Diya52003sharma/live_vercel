import React from "react";
import { useState } from "react";

export default function TestimonialSlider() {
  const data = [
    {
      text: "Food was amazing and service was excellent.",
      name: "Diya Sharma",
    },
    {
      text: "Best restaurant experience ever!",
      name: "Aman Verma",
    },
    {
      text: "Nice ambience and tasty food.",
      name: "Neha Singh",
    },
    {
      text: "Highly recommended for family dinners.",
      name: "Rohit Kumar",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? data.length - 1 : prev - 1
    );
  };

  // second card index
  const secondIndex = (index + 1) % data.length;

  return (
    <div className="flex flex-col items-center mt-20">

      {/* CARDS */}
      <div className="flex gap-10">

        {/* ORANGE CARD */}
        <div className="bg-orange-600 text-white p-6 rounded-xl shadow-lg w-[350px]">
          <p>{data[index].text}</p>

          <div className="flex justify-between mt-6">
            <span className="font-semibold">{data[index].name}</span>
            <span className="text-yellow-300">★★★★☆</span>
          </div>
        </div>

        {/* WHITE CARD */}
        <div className="bg-white text-gray-700 p-6 rounded-xl shadow-lg w-[350px]">
          <p>{data[secondIndex].text}</p>

          <div className="flex justify-between mt-6">
            <span className="font-semibold">{data[secondIndex].name}</span>
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>

      </div>

      {/* CONTROLS */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={prev}
          className="border border-orange-600 px-4 py-1 rounded hover:bg-orange-600 hover:text-white"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="border border-orange-600 px-4 py-1 rounded hover:bg-orange-600 hover:text-white"
        >
          Next
        </button>
      </div>

    </div>
  );
}
