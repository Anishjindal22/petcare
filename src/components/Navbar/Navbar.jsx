import React, { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const checkLoggedIn = () => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

            <AiOutlineMenu onClick={toggleSidebar} />
          </div>
        ) : (
          <div className="Nav-items gap-3">
            <NavLink to={"/login"} className="Nav-items">
              Log in
            </NavLink>

            <NavLink to={"/signup"} className="Nav-items">
              signup
            </NavLink>
          </div>
        )}
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <div>{user?.name}</div>
            <img src={user.image} alt="" />
            <div>{user.email}</div>
            <Link to={"/appointments"}>
              <li>Appointments</li>
            </Link>
            <Link to={"/orders"}>
              <li>My orders</li>
            </Link>

            <li
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                setIsSidebarOpen(false);
                toast.success("Logged out successfully");
                navigate("/");
              }}
            >
              Log out{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
