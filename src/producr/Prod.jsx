import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
export default function Productss() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  // Fetch API data
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    }
    fetchData();
  }, []);

  // Unique categories
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filtered products
  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>

      {/* Category Buttons */}
      <div className="flex gap-2 mb-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setCategory(cat)}
            className="border px-2 py-1 rounded"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div>
        {filtered.map(p => (
          <div key={p.id} className="border p-2 mb-2">
            <h4>{p.title}</h4>
            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
