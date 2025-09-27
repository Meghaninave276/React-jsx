# 📦 Orders Management Dashboard

This is a React-based Orders Management Dashboard that allows users to view, filter, and manage customer orders. It provides search and filtering options based on different fields such as Order ID, Customer Name, Phone, Product, Payment Status, Order Status, and Date.

# 🚀 Features

### 📋 View Orders – Displays all customer orders in a clean, tabular format.

### 🔍 Filter Orders – Search by:

Order ID

Customer Name

Phone Number

Product

Payment (Paid, Pending, Not Paid)

Status (New, Completed, Cancelled, etc.)

Date

### 🧹 Clear Filters – Reset filters to see all orders again.

### 🎨 Responsive UI – Styled with Bootstrap + custom CSS for a neat dashboard look.

### 👤 User Profile & Header Section – Displays logged-in user with avatar and notification icon.

### ➕ Action Buttons –

Filter

Export

Add New Order (placeholder for future extension).

# 🛠️ Tech Stack

  React.js – Frontend framework

  Bootstrap 5 – UI styling

  Custom CSS – Additional styling (Home.css)

  Local JSON Data – Orders are loaded from a static db.js file in assets.

# 📂 Project Structure
src/
 ├── assets/
 │   └── db.js        # Orders dataset (JSON-like format)
 ├── components/
 │   └── Home.js      # Main dashboard component
 ├── styles/
 │   └── Home.css     # Custom styles
 ├── App.js
 └── index.js

# ⚙️ How It Works

Orders are loaded from the db.js file into state.

Filters update the displayed data dynamically.

"Clear Filters" resets everything to the full dataset.

Table displays the filtered order list.

📸 UI Preview

Header Section with notifications and profile.

Tabs showing All, New, Completed, Cancelled, Pending orders.

Search & Filter Box for advanced filtering.

Table View listing order details.

# 🚀 Future Improvements

✅ Add pagination for large datasets.

✅ Enable CSV/Excel export functionality.

✅ Add "Add New Order" form with validation.

✅ Integrate with backend API for real-time data.



https://github.com/user-attachments/assets/d0ab81f3-0015-48d3-8126-2ee159abc786


