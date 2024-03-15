//Instance of express
const express = require("express");

//Instance of Router
const router = express.Router();

//import controllers
const{likePost, unlikePost} = require("../controllers/likeController");
const{createComment} = require("../controllers/commentController");
const{createPost,getAllPosts} = require("../controllers/postController");

//Define Api routes
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;