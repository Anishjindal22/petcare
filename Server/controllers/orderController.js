const Order = require("../models/orders")
const Product = require("../models/ProductSchema")

exports.newOrder = async(req,res) => {
    try {
        const {shippingInfo,orderItems,paymentInfo,itemsPrice,taxPrice,shippingPrice,totalPrice} = req.body

      if(!shippingInfo ||
         !orderItems || 
         !paymentInfo ||
         !itemsPrice ||
         !taxPrice ||
         !shippingPrice ||
         !totalPrice){
            return res.status(403).json({
                success:false,
                message:"All fields are4 required"
            }) 
         }  

        const order = Await Order.create({

        }) 
    } catch (error) {
        
    }
}