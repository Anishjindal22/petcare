const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        required:false
    },
    dogWalk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"DogWalk",
        required:false
    },
    grooming:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Grooming",
        required:false
    },
    type: {
        type: String,
        enum: ['dogWalk', 'doctorAppointment', 'grooming'],
        required: true
}
}
)