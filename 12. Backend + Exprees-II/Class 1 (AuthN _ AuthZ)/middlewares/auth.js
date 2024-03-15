///auth(Authnication), isStudent, isAdmin
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    //extract JWT
    //Pending : other ways to fecth token
    console.log("Body: ",req.body.token);
    console.log("Cookie: ",req.cookies.token);
    console.log("Header: ",req.header("Authorization"));
    const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is not present",
      });
    }

    //verify the token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);

      req.user = decode;
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Token is invalid",
      });
    }

    next();

  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Something went Wrong, While Verfying the Token",
    });
  }
};


//isStudent Middleware
exports.isStudent = (req, res, next) => {
  try{
    if(req.user.role !== "Student" ){
      return res.status(401).json({
        success: false,
        message: "This is the Protected route for students",
      });
    }

    next();

  }catch(error){
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User Role is not matching",
    });
  }
}

//isAdmin Middleware
exports.isAdmin = (req, res,next) => {
  try{
    if(req.user.role !== "Admin" ){
      return res.status(401).json({
        success: false,
        message: "This is the Protected route for Admins",
      });
    }

    next();
  }catch(error){
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User Role is not matching",
    });
  }
}