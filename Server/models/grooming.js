const mongoose = require("mongoose")

const groomingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    dogSize:{
        type:String,
        required:true,
        trim:true,
        enum:["small","medium","Large"]
    },
    price:{
        type:Number,
        required:true
    }
}) 

module.exports = mongoose.model("Grooming", groomingSchema)