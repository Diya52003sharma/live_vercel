import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
function Product() {
  const [sdata, setdata] = useState([]);
  const [category, setCategory] = useState("all");

   async function fetchData() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setdata(res.data);
    } catch {
      console.log("Something went wrong");
    }
  };

    useEffect(() => {
  fetchData(); // call function
}, []);
  const categories = ["all", ...new Set(sdata.map((item) => item.category))];

  const filteredData =
    category === "all"
      ? sdata
      : sdata.filter((item) => item.category === category);

  // Tailwind color map for categories
  const categoryColors = {
    "men's clothing": "bg-blue-100 border-blue-500",
    "women's clothing": "bg-pink-100 border-pink-500",
    electronics: "bg-gray-100 border-gray-500",
    jewelery: "bg-yellow-100 border-yellow-500",
    all: "bg-white border-black",
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-cyan-300 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">PRODUCTS</h1>

      {/* Category Buttons */}
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((el) => (
          <div
            key={el.id}
            className={`border-2 rounded-lg p-4 shadow-md hover:scale-105 transition transform ${
              categoryColors[el.category] || "bg-white border-black"
            }`}
          >
            <img
              src={el.image}
              alt={el.title}
              className="w-full h-64 object-contain mb-4"
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

export default Product;
