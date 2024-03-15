const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Post", //*This is the refernce to the post model
  },

  user:{
    type:String,
    required:true,
  },

 
  // createdAt: {
  //   type: Date,
  //   required: true,
  //   default: Date.now(),
  // },
  // updatedAt: {
  //   type: Date,
  //   required: true, 
  //   default: Date.now(),
  // },
});

module.exports = mongoose.model("Like", likeSchema);
