import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
const isLoggedIn = false;
export const Navbar = () => {
  return (
    <div className='main flex flex-row'>
            <div className='flex'>
                <img src="https://res.cloudinary.com/duu15ts5c/image/upload/v1709972585/GouravProject/assests/Screenshot_2024-03-09_135131_es3aic.png" alt=""
                    height={100}
                    width={200}
                />
            </div>
            <div className='flex flex-row'>

                    {/* Home */}
                <NavLink to={"/"}>
                <div>
                   <IoMdHome/>
                    <h2>Home</h2>
                </div>
                </NavLink>

                {/* products */}
                <NavLink to={"/products"}>
                <div>
                <FaShop/>
                <h2>Products</h2>
                </div>
                </NavLink>
                
                {/* Doctors */}
                <NavLink to={"/doctors"}>
                <div>
                <FaUserDoctor/>
                    <h2>
                        Medical checkup
                    </h2>
                </div>
                </NavLink>

                {isLoggedIn ? 
                (<div>
                    <NavLink to={"/cart-items"}>

                    <div>
                        <FaShoppingCart/>
                    </div>
                    </NavLink>
                    
                    <button>
                        Log out
                    </button>
                </div>) :
                 (<div>
                    <NavLink to={"/login"}>
                    <button>
                        Log in
                    </button>
                    </NavLink>

                    <NavLink to={"/signup"}>
                    <button>
                        signup
                    </button>
                    </NavLink>
                 </div>)}

            </div>
       

    </div>
  )
}

