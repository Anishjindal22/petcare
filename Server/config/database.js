const mongoose = require("mongoose");
require("dotenv").config();

exports.connecttoDb = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connection to db succesfull")
    })
    .catch((error) => {
        console.log("Issue in Db connection");
        console.error(error);
        process.exit(1);
    })
}