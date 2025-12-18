import { useState } from "react";
import React from "react";
function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Diya Sharma",
      message: "Amazing food and great service!",
      rating: 4,
    },
    {
      id: 2,
      name: "Aman Verma",
      message: "Loved the taste and presentation.",
      rating: 5,
    },
    {
      id: 3,
      name: "Neha Singh",
      message: "Affordable and delicious meals.",
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <div className="w-96 mx-auto p-6 shadow-lg text-center rounded">
      <p className="text-gray-600 italic">
        "{testimonials[current].message}"
      </p>

      <h3 className="text-orange-600 font-bold mt-4">
        {testimonials[current].name}
      </h3>

      {/* Rating */}
      <div className="text-yellow-500 mt-2">
        {"★".repeat(testimonials[current].rating)}
        {"☆".repeat(5 - testimonials[current].rating)}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="px-4 py-1 border rounded"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-4 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TestimonialSlider;
