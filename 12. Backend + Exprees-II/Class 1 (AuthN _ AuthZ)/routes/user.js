const express = require("express");
const router = express.Router();
const User = require("../Model/User");

const{login, signup} = require("../controllers/Auth")
const{auth, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login",login);
router.post("/signup",signup);

//*Testing Router
router.get("/test", auth, (req,res)=>{
  res.json({
    success:true,
    message:"Welcome to the Protected route for Testing",
  })
})

//Protected Routes
router.get("/student", auth, isStudent,(req,res)=>{
  res.json({
    success:true,
    message:"Welcome to the Protected route for students",
  })
});

router.get("/admin", auth, isAdmin,(req,res)=>{
  res.json({
    success:true,
    message:"Welcome to the Protected route for Admin",
  })
})

router.get("/getEmail",auth ,async (req,res)=>{
  try{
    const id = req.user.id;
    const user = await User.findById(id);
    res.status(200).json({
      success:true,
      user:user,
      message:"Welcome to the Email Route",
    })

  }catch(error){
    res.status(500).json({
      success:false,
      error:error.message,
      message:"Fatt Gya Code",
    })
  }

  // const id = req.user.id;
  // console.log("ID: ", id);

  // res.json({
  //   success:true,
  //   id:id,
  //   message:"Welcome to the Email Route",
  // })
})

module.exports = router;