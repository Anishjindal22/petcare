const express = require("express")
const router = express.Router();
const {isAdmin,auth} = require("../middlewares/auth");
const { newOrder } = require("../controllers/orderController");

router.post("/order/new", auth,newOrder)

module.exports = router