const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender")
const emailVerificationTemplate = require("../mail/templates/emailVerificationTemplate")
const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expiresIn: 5 * 60
    }
})

async function sendVerificationOTP(email,otp) {
    try {
        const mailresponse = mailSender(email,
            "verification email",
            emailVerificationTemplate(otp)
            )
            return mailresponse;
    } catch (error) {
        console.log("Error while sending mail",error)
        console.log(error)
    }
}


OTPSchema.pre("save", async function (next) {
    await sendVerificationOTP(this.email, this.otp);
    console.log(otp)
    next();
}) 

module.exports = mongoose.model("OTP",OTPSchema)