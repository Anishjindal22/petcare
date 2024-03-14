import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";
const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
