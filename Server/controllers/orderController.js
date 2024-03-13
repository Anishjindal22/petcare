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

        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt: Date.now(),
            user: req.user._id
        }) 

        res.status(200).json({
            success:true,
            order
        })
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Internal servere error not able to place the order please try again later!!"
        })
    }
}