const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");
require("dotenv").config();
// function to generate otp using otp-generator
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(500).json({
        success: false,
        message: "User already exists",
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
    }
    result = await OTP.findOne({ otp: otp });

    const createdOTP = await OTP.create({
      email,
      otp,
    });

    return res.status(200).json({
      success: true,
      message: "otp created successfully",
      createdOTP,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error in generating otp please try again later",
    });
  }
};

// function to create new user sign up
exports.SignUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      petSize,
      password,
      confirmPassword,
      // otp
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !petSize ||
      !confirmPassword ||
      !password
      // !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(500).json({
        success: false,
        message: "Password and confirm password must be same",
      });
    }

    const exisitingUser = await User.findOne({ email });

    if (exisitingUser) {
      return res.status(401).json({
        success: false,
        message: "User already exists",
      });
    }
    // const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);

    // if(recentOtp.length === 0){
    //     return res.status(402).json({
    //         success:false,
    //         message:"OTP not found"
    //     })
    // }

    // if(otp !== recentOtp){
    //     return res.status(500).json({
    //         success:false,
    //         message:"Invalid otp"
    //     })
    // }

    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPwd,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      petSize,
    });

    return res.status(200).json({
      success: true,
      message: "User created succesfully",
      newUser,
    });
  } catch (error) {
    return res.status(402).json({
      success: false,
      message: "Error in signing up user please try again later",
      error,
    });
  }
};

// function to login user
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "invalid email or password", success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).send({ message: "login success", success: true, token });
  } catch (error) {
    console.log(500).send({ message: `error in login ${error.message}` });
  }
};

// function to change password or to update password
exports.changePassword = async (req, res) => {
  try {
    const userDetails = await User.findById(req.user.id);

    const { oldPassword, newPassword } = req.body;

    const matchPassword = await bcrypt.compare(
      oldPassword,
      userDetails.password
    );

    if (!matchPassword) {
      return res.status(401).json({
        success: false,
        message: "The password in incorrect",
      });
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "Internal server error while changing password please try again later",
      error: error.message,
    });
  }
};

exports.authController = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    if (!user) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: user.firstName + " " + user.lastName,
          email: user.email,
          account: user.accountType,
          image: user.image,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });

    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User is not registered with us",
      });
    }
  } catch (error) {}
};
