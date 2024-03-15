const express = require("express");
require("dotenv").config();
const contactMe = require("./routes/contactMe")
const dbConnect = require("./config/database");
dbConnect();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use("/api/v1", contactMe);

//activation
app.listen(PORT,()=>{
  console.log(`App is listening at ${PORT}`);
})


//I added this code
app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});