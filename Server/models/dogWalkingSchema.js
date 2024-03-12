const mongoose = reqiuire("mongoose")
const dogWalkingSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("DogWalk",dogWalkingSchema);