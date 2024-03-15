//import model
const Post = require("../models/postModel")
const Like = require("../models/likeModel")


//business logic
exports.likePost = async(req,res) => {
  try{
    //fetch Data from req body
    const{post, user} = req.body;

    const like = new Like({
      post, user
    })

    const savedLike = await like.save();

    //find post using id and add new Like in Like array
    const updatePost = await Post.findByIdAndUpdate(post,
      {$push:{likes:savedLike._id}},
      {new:true}
      )
      //Populates the Likes array wth Like documents
      .populate("likes")
      .exec();

      res.json({
        post:updatePost,
      })
  }
  catch(err){
    return res.status(500).json({
      error:"Error while Liking the Post"
    })
  }
};

exports.unlikePost = async(req,res) => {
  try{
    const {post, like} = req.body;

    //find and delete the like collection me se
    const deleteLike = await Like.findOneAndDelete({post:post, _id:like});

    //update the post collection
    const updatePost = await Post.findByIdAndUpdate(post, {$pull:{likes:deleteLike._id}}, {new:true})

    res.json({
      post:updatePost
    })
  }
  catch(err){
    return res.status(500).json({
      error:"Error while Unliking Post"
    })
  }
};

 