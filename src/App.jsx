import React, { useState, useEffect } from "react";
import ProductsGrid from "../components/ProductsGrid";
import CheckoutModal from "../components/CheckoutModal";
import Cart from "../components/Cart";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function App() {
  const [cartData, setCartData] = useState({ items: [], total: 0 });
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);

  // 🎊 Confetti animation when receipt appears
  useEffect(() => {
    if (receipt) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00C9FF", "#92FE9D", "#FFD700", "#FF69B4"],
      });
    }
  }, [receipt]);

  // ➕ Add to cart
  const handleAddToCart = (product) => {
    setCartData((prev) => {
      const existingItem = prev.items.find((item) => item.id === product.id);
      const updatedItems = existingItem
        ? prev.items.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prev.items, { ...product, qty: 1 }];
      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
      return { items: updatedItems, total };
    });
  };

  // ❌ Remove item
  const handleRemove = (id) => {
    setCartData((prev) => {
      const updatedItems = prev.items.filter((i) => i.id !== id);
      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
      return { items: updatedItems, total };
    });
  };

  // 🔁 Update quantity
  const handleUpdateQty = (id, qty) => {
    if (qty <= 0) return handleRemove(id);
    setCartData((prev) => {
      const updatedItems = prev.items.map((item) =>
        item.id === id ? { ...item, qty } : item
      );
      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
      return { items: updatedItems, total };
    });
  };

  // ✅ Checkout Confirm
  const handleCheckout = (formData) => {
    const newReceipt = {
      id: "RCPT-" + Math.random().toString(36).substring(2, 9).toUpperCase(),
      name: formData.name,
      email: formData.email,
      total: cartData.total.toFixed(2),
      timestamp: new Date().toLocaleString(),
    };
    setReceipt(newReceipt);
    setShowCheckout(false);
    setCartData({ items: [], total: 0 });
  };

  return (
    <div className="min-h-screen bg-[#0b1221] text-white p-6">
      <motion.h1
        className="text-4xl font-bold text-blue-400 mb-2 text-center flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🛍️ Vibe Commerce
      </motion.h1>

      <p className="text-gray-400 text-center mb-10">
        Mock Cart powered by Fake Store API
      </p>

      {/* 🛒 Main layout */}
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="col-span-3">
          <ProductsGrid onAddToCart={handleAddToCart} />
        </div>
        <div>
          <Cart
            items={cartData.items}
            total={cartData.total}
            onRemove={handleRemove}
            onUpdateQty={handleUpdateQty}
            onCheckout={() => setShowCheckout(true)}
          />
        </div>
      </div>

      {/* 💳 Checkout Modal */}
      {showCheckout && (
        <CheckoutModal
          onClose={() => setShowCheckout(false)}
          onSubmit={handleCheckout}
        />
      )}

      {/* 🧾 Receipt Modal */}
      {receipt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-gray-800 rounded-xl p-6 w-96 text-center"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              ✅ Order Confirmed
            </h3>
            <p>
              Receipt ID: <span className="text-gray-300">{receipt.id}</span>
            </p>
            <p>
              Name: <span className="text-blue-400">{receipt.name}</span>
            </p>
            <p>
              Email: <span className="text-blue-400">{receipt.email}</span>
            </p>
            <p>
              Total: <span className="text-green-400">₹{receipt.total}</span>
            </p>
            <p>
              Time: <span className="text-gray-400">{receipt.timestamp}</span>
            </p>
            <button
              onClick={() => setReceipt(null)}
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
