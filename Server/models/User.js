const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  petSize: {
    type: String,
    required: true,
    enum: ["None", "small", "medium", "Large"],
    defalt: "None",
  },
  accountType: {
    type: String,
    required: true,
    default: "User",
  },
  image: {
    type: String,
    required: true,
  },
  bookings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bookings",
  },
  token: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
});

module.exports = mongoose.model("User", UserSchema);
