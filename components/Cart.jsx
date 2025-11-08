import React from "react";

export default function Cart({
  items = [],
  total = 0,
  onRemove,
  onUpdateQty,
  onCheckout, // ✅ Added prop
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
        🛒 Your Cart{" "}
        {items.length > 0 && (
          <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded-lg">
            {items.length}
          </span>
        )}
      </h2>

      {items.length === 0 ? (
        <p className="text-gray-400 text-center flex items-center justify-center gap-2">
          <span>🛍️</span> Your cart is empty
        </p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-700 p-3 rounded-lg"
            >
              <div className="w-2/3">
                <h3 className="text-lg font-medium line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-1">
                  ₹{item.price} × {item.qty}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onUpdateQty(item.id, item.qty - 1)}
                  className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white"
                >
                  -
                </button>
                <span className="text-gray-200">{item.qty}</span>
                <button
                  onClick={() => onUpdateQty(item.id, item.qty + 1)}
                  className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white"
                >
                  +
                </button>
                <button
                  onClick={() => onRemove(item.id)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4">
            <h3 className="text-lg font-semibold text-green-400">
              Total: ₹{total.toFixed(2)}
            </h3>

            {/* ✅ Checkout Button */}
            {items.length > 0 && (
              <button
                onClick={onCheckout}
                className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
