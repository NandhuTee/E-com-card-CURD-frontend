# E-Com Cart Full Stack Application

A full-stack mock e-commerce cart system with React frontend and Node.js/Express backend.  
This project integrates **MongoDB Atlas** for persisting orders, and **FakeStoreAPI** for product data fallback.

---

## 🛠️ Technologies Used

**Frontend:**
- React (Vite)
- Tailwind CSS
- Framer Motion & Canvas Confetti for animations
- Fetch API for backend integration

**Backend:**
- Node.js, Express.js
- MongoDB Atlas (cloud database)
- CORS, dotenv
- Node-Fetch for external API (FakeStoreAPI)

---

## 📂 Project Structure
```
E-Com-Cart/
├─ backend/
│ ├─ models/
│ │ └─ Order.js # Mongoose schema for orders
│ ├─ db.js # MongoDB connection setup
│ ├─ server.js # Express server with API routes
│ ├─ package.json # Backend dependencies and scripts
│ └─ .env # Environment variables for backend
├─ ecom-frontend/
│ ├─ src/
│ │ ├─ components/
│ │ │ ├─ Cart.jsx # Cart component
│ │ │ ├─ CheckoutModal.jsx # Checkout modal component
│ │ │ └─ ProductsGrid.jsx # Product listing grid component
│ │ ├─ App.jsx # Main React app component
│ │ └─ main.jsx # React entry point
│ ├─ package.json # Frontend dependencies and scripts
│ └─ vite.config.js # Vite configuration
└─ README.md # Project documentation
```


---

## 🚀 Features

**Frontend:**
- Browse products fetched from backend or FakeStoreAPI
- Add, remove, and update quantities in cart
- Checkout modal with **Name** & **Email** input validation
- Receipt modal with confetti animation
- Responsive design with Tailwind CSS

**Backend:**
- REST API endpoints:
  - `GET /api/products` → Fetch products
  - `GET /api/cart` → Get cart items & total
  - `POST /api/cart` → Add product to cart
  - `DELETE /api/cart/:id` → Remove product from cart
  - `POST /api/checkout` → Checkout and save order in MongoDB Atlas
- MongoDB Atlas stores order details with timestamp

---

## 🌐 Live Demo

**Frontend (Vercel):**  
[e-com-card-curd-frontend.vercel.app](https://e-com-card-curd-frontend.vercel.app)  

**Backend (Render):**  
[e-com-card-curd-backend.onrender.com](https://e-com-card-curd-backend.onrender.com)

---

## 💻 Local Setup

### Backend
1. Clone backend repo:
```bash
git clone https://github.com/NandhuTee/E-com-card-CURD-backend.git
cd E-com-card-CURD-backend
```
2. Install dependencies:
```bash
npm install
```
3. Create .env file:
```env
MONGO_URI=your_mongodb_atlas_uri
PORT=4000
USE_FAKE_STORE=true
```
4.Start server:
```bash
node server.js
```
### Frontend

1. Clone frontend repo:
```bash
git clone https://github.com/NandhuTee/E-com-card-CURD-frontend.git
cd ecom-frontend
```
2.Install dependencies:
```bash
npm install
```
3.Create .env file:
```bash
VITE_API_URL=https://e-com-card-curd-backend.onrender.com
```
4.Start dev server:
```bash 
npm run dev
```

5.Open http://localhost:5173 in browser

### 📝 How It Works

- Product Listing: Frontend fetches products from backend (/api/products).

- Cart Management: Add/remove items, update quantities. Cart state is stored in React state.

- Checkout: Open modal, enter Name & Email → frontend sends POST /api/checkout to backend.

- Order Persistence: Backend saves order to MongoDB Atlas.

- Receipt: Frontend shows order details with confetti animation on successful checkout.

📦 Environment Variables

Backend .env:
```env
MONGO_URI=<MongoDB Atlas URI>
PORT=4000
USE_FAKE_STORE=true
```

Frontend .env:
```
VITE_API_URL=https://e-com-card-curd-backend.onrender.com
```
🔧 Notes

Backend must be live for checkout to work properly.

If USE_FAKE_STORE is true, product data is fetched from FakeStoreAPI
.

MongoDB Atlas ensures order data persists across sessions.

🏷️ Author

Nandhu Tee
GitHub: https://github.com/NandhuTee