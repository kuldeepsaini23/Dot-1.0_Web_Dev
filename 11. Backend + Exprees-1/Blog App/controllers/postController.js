//import model
const Post = require("../models/postModel")



//business logic
exports.createPost = async(req,res) => {
  try{
    //fetch Data from req body
    const{title, body} = req.body;
    

    const post = new Post({
      title, body
    })

    const savedPost = await post.save();

      res.json({
        post:savedPost,
      })
  }
  catch(err){
    return res.status(500).json({
      error:"Error while creating Post",
    })
  }
};

exports.getAllPosts = async (req,res)=>{
  try{
    const posts = await Post.find().populate("likes").populate("comments").exec();

    res.json({
      posts,
    })
  }
  catch(err){
    return res.status(500).json({
      error:"Error while creating Post",
    })
  }
}