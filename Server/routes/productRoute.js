const express = require("express");
const { createNewProduct,getAllProducts,updateProduct,deleteProduct,getProductDetails} = require("../controllers/productController");

const {isAdmin,auth} = require("../middlewares/auth")
const router = express.Router();

router.post("/products/new", auth, isAdmin, createNewProduct)
router.get("/products/all-Products", getAllProducts)
router.put("/products/:id", auth, isAdmin, updateProduct)
router.delete("/products/:id", auth, isAdmin, deleteProduct)
router.get("/products/:id", auth, isAdmin, getProductDetails)
module.exports = router ;