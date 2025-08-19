const express = require("express");
const app = express();
require('dotenv').config();


const mongoosedetails = process.env.DBURL;
// console.log(mongoosedetails)
// return false
const mongoose = require("mongoose");
mongoose.connect(mongoosedetails);



const authRoutes = require("./Routes/Web/login_routes");
const protectedRoute = require("./Routes/Web/protectedRoute");
app.use(express.json());




app.use("/auth", authRoutes);
app.use("/protected",protectedRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
