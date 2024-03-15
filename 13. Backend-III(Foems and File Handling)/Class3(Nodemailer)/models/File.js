const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tage: {
    type: String,
  },
  email: {
    type: String,
  },
});

//! Adding Post Middleware Class 3
fileSchema.post("save", async function (doc) {

  console.log(doc)
  try{
    //transpoter
    let transpoter = nodemailer.createTransport({
      host:process.env.MAIL_HOST,
      auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS,
      },
    })

    //send mail
    let info = await transpoter.sendMail({
      from:'techbro2311@gmail.com',
      to:doc.email,
      subject:"New File Uploaded on Cloudinary",
      html:`<h2>Hello, Thanks For Uploading</h2> <p>File Uploaded</p> View here: <a href=${doc.imageUrl}>${doc.imageUrl}</a>"`
    })

    console.log(info);

  }catch(error){
    console.log(error);

  }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
