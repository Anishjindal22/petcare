const express = require("express");
const app = express();
const database = require("./config/database");
const product = require("./routes/productRoute");
const User = require("./routes/userRotes")
const Doctor = require("./routes/doctorRoutes")
const cookieParser = require("cookie-parser")
const order = require("./routes/orderRoutes")
const cors = require("cors")
require("dotenv").config();

const PORT = process.env.PORT || 3000;


database.connecttoDb();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1",product)
app.use("/api/v1/user",User)
app.use("/api/v1/user",order)
app.use("/api/v1/doctor",Doctor)

app.listen(PORT, () => {
	return(

		console.log(`App is running succesfully on port ${PORT}`)
	)
})
