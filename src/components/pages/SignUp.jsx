import React, { useState } from "react";
import "./SignUp.css";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    petSize: "small",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, petSize, password, confirmPassword } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      if (password !== confirmPassword) {
        toast.error("Passwords Do Not Match");
        return; // Exit early if passwords don't match
      }

      const res = await axios.post(
        "http://localhost:4000/api/v1/user/signUp",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        toast.success("User registered successfully");
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
      toast.error("Something went wrong while registering the user");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form className="form" method="POST" onSubmit={handleOnSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          placeholder="Enter your first name"
          onChange={handleOnChange}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          placeholder="Enter your last name"
          onChange={handleOnChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleOnChange}
          required
        />
        <label htmlFor="petSize">Pet Size:</label>
        <select
          id="petSize"
          name="petSize"
          value={petSize}
          onChange={handleOnChange}
          required
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            required
            value={password}
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={`${showConfirmPassword ? "text" : "password"}`}
            id="confirmPassword"
            required
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={handleOnChange}
          />
          {showConfirmPassword ? (
            <FaEyeSlash onClick={() => setShowConfirmPassword(false)} />
          ) : (
            <FaEye onClick={() => setShowConfirmPassword(true)} />
          )}
        </div>
        <button>Register</button>
        <Link to={"/login"}>
          <p>Already have an account? Login here</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
