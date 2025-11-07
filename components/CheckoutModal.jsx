import React, { useState } from "react";

export default function CheckoutModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    if (!form.name || !form.email) {
      alert("Please fill out your name and email before confirming.");
      return;
    }
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl p-6 w-96 shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
          Checkout
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-around mt-4">
          <button
            onClick={handleConfirm}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            Confirm Checkout
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
