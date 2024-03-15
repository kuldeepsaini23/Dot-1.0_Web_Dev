//import model
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")


//business logic
exports.createComment = async(req,res) => {
  try{
    //fetch Data from req body
    const{post, user, body} = req.body;

    const comment = new Comment({
      post, user, body
    })

    const savedComment = await comment.save();

    //find post using id and add new comment in comment array
    const updatePost = await Post.findByIdAndUpdate(post,
      {$push:{comments:savedComment._id}},
      {new:true}
      )
      //Populates the comments array wth comment documents
      .populate("comments")
      .exec();

      res.json({
        post:updatePost,
      })
  }
  catch(err){
    return res.status(500).json({
      error:"Error while creating comment"
    })
  }
};