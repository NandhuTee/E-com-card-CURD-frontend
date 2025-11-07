const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export async function fetchProducts() {
  const res = await fetch(`${BASE}/api/products`);
  return res.json();
}

export async function fetchCart() {
  const res = await fetch(`${BASE}/api/cart`);
  return res.json();
}

export async function addToCart(productId, qty) {
  const res = await fetch(`${BASE}/api/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, qty }),
  });
  return res.json();
}

export async function removeFromCart(productId) {
  const res = await fetch(`${BASE}/api/cart/${productId}`, { method: 'DELETE' });
  return res.json();
}

export async function checkout(cartItems, name, email) {
  const res = await fetch(`${BASE}/api/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartItems, name, email }),
  });
  return res.json();
}
