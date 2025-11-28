import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loginpage from "./Pages/Loginpage/Loginpage";
import Productlist from "./components/Productlist/Productlist";
import Productform from "./Pages/Addproduct/Addproduct";
import Editproductpage from "./Pages/Editproduct/Editproduct";


export default function App() {
  return (
    <Router>
      <Navbar/>

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

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </Router>
  );
}
