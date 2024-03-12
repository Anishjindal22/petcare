const express = require("express")
const router = express.Router();

const {sendOTP,SignUp,login,changePassword} = require("../controllers/userController")

router.post("/signUp",SignUp);
router.post("/login",login);
router.post("/sendotp",sendOTP);
router.post("/changePassword",changePassword);
module.exports = router