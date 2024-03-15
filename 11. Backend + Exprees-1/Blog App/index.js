// INstance of express
const express = require("express");

// serevr initiate
const app = express();

//Load env
require("dotenv").config()
const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());

//import routes
const blogRoutes = require("./routes/blog");

//Mount all the api routes
app.use("/api/v1", blogRoutes);

//start the server
app.listen(PORT, ()=>{
  console.log(`The app is listening at Port no ${PORT}`);
})

//connect to database
const dbConnect = require('./config/database');
dbConnect();

//Define Route
app.get("/",(req,res)=>{
  res.send("This is my Bloging Website")
})