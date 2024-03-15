import React, { useState } from "react";
import "./SignUp.css";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    petSize: "small", // Default value for petSize
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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    console.log(formData);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form className="form" onSubmit={handleOnSubmit}>
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
