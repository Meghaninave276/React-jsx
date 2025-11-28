# ✨ Real-Time Chat Application (React + Firebase + Redux Toolkit)

This is a modern real-time chat application built using ReactJS, Redux Toolkit, Firebase Firestore, and Google Authentication.
Users can securely create an account, sign in, and chat instantly with other registered users.

# 🚀 Features

✔ User Signup & Sign-In (Email + Password)

✔ Sign-In using Google Authentication

✔ Displays list of all registered users (except logged-in user)

✔ Real-time messaging using Firebase Firestore

✔ Send, Edit & Delete messages

✔ Online status indicator (UI based)

✔ Fully responsive Glassmorphism UI

✔ Smooth animations & professional layouts

✔ Secure user session stored in Local Storage

# 🛠️ Tech Stack Used
Category	Technology
Frontend	ReactJS, CSS3, Glassmorphism Design
State Management	Redux Toolkit
Backend	Firebase Firestore
Authentication	Firebase Auth (Email/Password + Google)
Routing	React Router DOM
📌 Key Functionalities

# 🔹 User Authentication
Users can sign up and login using email & password or Google.

# 🔹 Chat System
Each conversation is stored in a unique chatroom based on user emails. Chat includes:

Send message

Edit message (single click)

Delete message (double click)

Auto refresh every second for live experience

# 🔹 UI Highlights

Glassmorphic list design for user selection

Modern chat UI with left/right bubble messaging

Colorful gradient theme

# 📌 Project Structure
/src
  
  ├── slices
  
  │   ├── userslice.js
  
  │   └── chatslice.js
  
  ├── pages
  
  │   ├── SignIns.jsx
  
  │   ├── SignUps.jsx
  
  │   ├── Userhomepage.jsx
  
  │   └── Chatpage.jsx
  
  ├── firebase.js
  
  ├── App.js
  
  └── index.js

🔧 Installation & Setup
# Clone the project
git clone <repo-link>

# Install dependencies
npm install

# Start development server
npm start


Update your Firebase config inside:

src/firebase.js

# 📝 Future Improvements

🚀 Typing Indicator

📌 Push Notifications

📷 Image sharing support

🎨 Dark/Light theme toggle

https://react-jsx-nine.vercel.app/




