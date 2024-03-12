const mongoose = require("mongoose");
const DoctorSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    contactNumber:{
        type:Number,
        required:true,
    },
    experience:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model("Doctor", DoctorSchema);