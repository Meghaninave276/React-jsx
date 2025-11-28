import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loginpage from "./Pages/Loginpage/Loginpage";
import Privateroute from "./components/Privateroute/Privateroute";
import Productlist from "./components/Productlist/Productlist";
import Productform from "./Pages/Addproduct/Addproduct";
import Editproductpage from "./Pages/Editproduct/Editproduct";


export default function App() {
  const location = useLocation();

  // Show navbar on all pages except /login
  const showNavbar = location.pathname !== "/login";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Loginpage />} />

        {/* Private Routes */}
        <Route
          path="/products"
          element={
           <Privateroute>
            <Productlist/>
           </Privateroute>
          }
        />
        <Route
          path="/add-product"
          element={
             <Privateroute>
              <Productform/>
           </Privateroute>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <Privateroute>
            <Editproductpage/>
           </Privateroute>
          }
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
