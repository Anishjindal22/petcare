import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const isLoggedIn = true;
export const Navbar = () => {
  return (
    <div className="main">
      <div>
        <img
          src="https://res.cloudinary.com/duu15ts5c/image/upload/v1710520092/GouravProject/assests/5c215f4c-8e58-4f66-8c12-4239a4a7d107.png"
          alt=""
          className="logo"
        />
      </div>

      <div className="Nav-Links">
        {/* Home */}
        <NavLink to={"/"} className="Nav-items">
          <IoMdHome />
          <h2>Home</h2>
        </NavLink>

        {/* products */}
        <NavLink to={"/products"} className="Nav-items">
          <FaShop />
          <h2>Products</h2>
        </NavLink>

        {/* Doctors */}
        <NavLink to={"/doctors"} className="Nav-items">
          <FaUserDoctor />
          <h2>Medical checkup</h2>
        </NavLink>

        {isLoggedIn ? (
          <div className="Nav-items">
            <NavLink to={"/cart"} className="Nav-items">
              <FaShoppingCart />
            </NavLink>

            <button>Log out</button>
          </div>
        ) : (
          <div>
            <NavLink to={"/login"} className="Nav-items">
              Log in
            </NavLink>

            <NavLink to={"/signup"} className="Nav-items">
              signup
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
