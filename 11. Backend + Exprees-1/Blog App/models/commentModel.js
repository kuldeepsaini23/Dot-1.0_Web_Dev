const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Post", //*This is the refernce to the post model
  },

  user:{
    type:String,
    required:true,
  },

  body: {
    type: String,
    required: true,
    maxLength: 50,
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

module.exports = mongoose.model("Comment", commentSchema);
