# 🛒 Product Manager App

A React.js web application for managing products with authentication, CRUD operations, and modern UI design. Users can log in, add, edit, delete, and view products with search, filter, and sorting functionality.

# ✨ Features

🔒 Authentication

📧 Email/Password Login – Secure login using email and password.

🟢 Google Sign-In – Quick login with Google OAuth.

🔑 Private Routes – Only authenticated users can access sensitive pages.

🚪 Logout – Clear authentication and exit the app securely.

📦 Product Management

➕ Add Product – Add new products with title, price, category, and image URL.

✏️ Edit Product – Update product details seamlessly.

🗑️ Delete Product – Remove unwanted products with confirmation.

🖼️ View Products – Grid display with image, title, price, and category.

🔍 Search & Filter

🔎 Search Products – Search products by title in real-time.

🏷️ Category Filter – Filter by category (Men/Women T-Shirts, Jeans).

📊 Sort Products – Sort by price (low to high / high to low).

🎨 UI/UX

📱 Responsive Design – Looks great on desktop & mobile.

🪞 Glassmorphism UI – Modern frosted-glass cards and forms.

💅 Bootstrap Integration – Clean and responsive styling.

# 🛠️ Tech Stack

Frontend: React.js ⚛️, Redux Toolkit 🗂️

Routing: React Router DOM 🛤️

Authentication: Firebase Auth 🔒

State Management: Redux Toolkit 🧩

Styling: CSS 🎨, Bootstrap 🅱️, Glassmorphism effects 🪞

Data Handling: Redux store 🗃️

# 📁 Project Structure
src/
├─ components/
│  ├─ Navbar/
│  ├─ Loginpage/
│  ├─ Productform/
│  ├─ Productlist/
│  └─ Productitem/
├─ pages/
│  ├─ Productpage.js
│  └─ Editproductpage.js
├─ slices/
│  └─ productslice.js
├─ firebase.js
└─ App.js

# 🚀 Getting Started

Install dependencies

cd product-manager
npm install


Setup Firebase

Create a Firebase project.

Enable Authentication (Email/Password & Google).

Add your Firebase config in firebase.js.

Run the app

npm start


Open http://localhost:3000
 in your browser.

📝 Usage

🔑 Login using email/password or Google.

📦 View the product list.

➕ Add new products using the form.

✏️ Edit or 🗑️ delete products.

🔍 Search, 🏷️ filter, and 📊 sort products easily.

🌟 Future Enhancements

💾 Persist products in a backend (Firebase Firestore / REST API).

📸 Upload product images instead of URLs.

👥 Add user roles and permissions.

🛍️ Detailed product view pages.

🔔 Notifications & alerts for actions.


https://react-jsx-rgck.vercel.app
