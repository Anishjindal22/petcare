import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        loginDetails
      );
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful");
        navigate("/", { replace: true });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={loginDetails.email}
        required
        onChange={handleOnChange}
      />
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          required
          value={loginDetails.password}
          name="password"
          placeholder="Enter your password"
          onChange={handleOnChange}
        />
        {showPassword ? (
          <FaEyeSlash onClick={() => setShowPassword(false)} />
        ) : (
          <FaEye onClick={() => setShowPassword(true)} />
        )}
      </div>
      <button type="submit">Log in</button>
      <Link to="/signup">Don't have an account? Register here</Link>
    </form>
  );
};

export default Login;
