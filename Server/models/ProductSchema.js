const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    price:{
        type:Number,
        required:true
    },
    ratings:{
        type:Number
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:["Food","Toys","Leashes"]
    },
    stock:{
        type:Number,
        required:true,
        default:1
    }
})

module.exports = mongoose.model("Product",ProductSchema);