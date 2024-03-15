const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  body: {
    type: String,
    required: true,
  },
  likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Like",
  }],
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment",
  }]



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

module.exports = mongoose.model("Post", postSchema);
