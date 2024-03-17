import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoutes";
import { LoginProtectedRoute } from "./routes/LoginProtectedRoute";
import Loader from "./components/Loader/Loader";
import "./App.css";
const App = () => {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {" "}
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/login"
              element={
                <LoginProtectedRoute>
                  <Login />
                </LoginProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <LoginProtectedRoute>
                  <SignUp />
                </LoginProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
