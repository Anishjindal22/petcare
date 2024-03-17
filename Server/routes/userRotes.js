const express = require("express");
const router = express.Router();

const {
  sendOTP,
  SignUp,
  login,
  changePassword,
  authController,
} = require("../controllers/userController");
const { auth } = require("../middlewares/auth");

router.post("/signUp", SignUp);
router.post("/login", login);
router.post("/sendotp", sendOTP);
router.post("/changePassword", changePassword);
router.post("/getUserData", auth, authController);
module.exports = router;
