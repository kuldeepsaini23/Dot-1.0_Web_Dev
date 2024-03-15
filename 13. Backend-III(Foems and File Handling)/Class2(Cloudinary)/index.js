//app create
const express = require("express");
const app = express();

//Port findout
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Middleware aa
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

//db se connect
const db = require("./config/database");
db.connect();

//cloud se connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount
const Upload = require("./routes/FileUpload")
app.use("/api/v1/upload",Upload);

//activate server
app.listen(PORT, (req,res)=>{
  console.log(`App is running at ${PORT}`);
})