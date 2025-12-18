import { useState } from "react";
import React from "react";
function Products() {
  // ✅ STATIC FOOD DATA
  const foodData = [
    {
      id: 1,
      title: "Paneer Butter Masala",
      price: 250,
      category: "veg",
      image: "https://via.placeholder.com/300?text=Paneer",
    },
    {
      id: 2,
      title: "Chicken Biryani",
      price: 320,
      category: "non-veg",
      image: "https://via.placeholder.com/300?text=Biryani",
    },
    {
      id: 3,
      title: "Veg Pizza",
      price: 180,
      category: "fast-food",
      image: "https://via.placeholder.com/300?text=Pizza",
    },
    {
      id: 4,
      title: "Burger",
      price: 120,
      category: "fast-food",
      image: "https://via.placeholder.com/300?text=Burger",
    },
    {
      id: 5,
      title: "Dal Tadka",
      price: 150,
      category: "veg",
      image: "https://via.placeholder.com/300?text=Dal",
    },
    {
      id: 6,
      title: "Chicken Curry",
      price: 280,
      category: "non-veg",
      image: "https://via.placeholder.com/300?text=Chicken",
    },
  ];

  const [category, setCategory] = useState("all");

  // ✅ categories dynamically
  const categories = ["all", ...new Set(foodData.map((item) => item.category))];

  // ✅ filter logic
  const filteredData =
    category === "all"
      ? foodData
      : foodData.filter((item) => item.category === category);

  // ✅ colors by category
  const categoryColors = {
    veg: "bg-green-100 border-green-500",
    "non-veg": "bg-red-100 border-red-500",
    "fast-food": "bg-yellow-100 border-yellow-500",
    all: "bg-white border-black",
  };

  return (
    <div className="bg-gradient-to-r from-orange-200 to-yellow-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">FOOD MENU</h1>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              category === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-black border border-gray-300 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* FOOD CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((el) => (
          <div
            key={el.id}
            className={`border-2 rounded-lg p-4 shadow-md hover:scale-105 transition ${
              categoryColors[el.category]
            }`}
          >
            <img
              src={el.image}
              alt={el.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="font-semibold mb-2">{el.title}</h4>
            <h3 className="text-lg font-bold mb-2">₹ {el.price}</h3>
            <p className="italic text-gray-600">{el.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
