import React, { useEffect, useState } from "react";

export default function ProductsGrid({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-3"
          />
          <h3 className="text-lg font-semibold text-blue-300 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-2">
            {product.description}
          </p>
          <p className="text-blue-400 font-bold mb-3">₹{product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
