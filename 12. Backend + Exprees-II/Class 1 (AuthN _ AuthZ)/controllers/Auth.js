//importing Bcrypt libraray
const bcrypt = require("bcrypt");
const User = require("../Model/User");
const jwt = require("jsonwebtoken")
require("dotenv").config();

//signup route handler
exports.signup = async (req, res) => {
  try {
    //get data
    const { name, email, password, role } = req.body;

    //check if user exist or not
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already Exist",
      });
    }

    //Password Secure
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch {
      res.status(500).json({
        success: false,
        message: "Error in Hashing Password",
      });
    }

    //create entry for user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(400).json({
      success: true,
      message: "User created Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered, please try again Later",
    });
  }
};

//login
exports.login = async (req, res) => {
  try {
    //data fetch
    const { email, password } = req.body;

    //Validation on email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the details carefully",
      });
    }

    //emain in db present or not
    let user = await User.findOne({ email });

    //if not a registered User
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Wrong Email",
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };
    //verify password and generate JWT Token
    if (await bcrypt.compare(password, user.password)) {
      //Password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user = user.toObject();
      //eske Bina bhi hota hh aur ye HW hh
      user.token = token;
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      //!With Cookie
      res.cookie("Kuldeeptoken", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "user Logged in Successfully",
      });

      //!Without Cookie
      // res.status(200).json({
      //   success: true,
      //   token,
      //   user,
      //   message: "user Logged in Successfully",
      // });

    } else {
      //Password donot match
      return res.status(403).json({
        success: false,
        message: "Password Incorrect",
      });
    }
  } 
  catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Login Failure",
    });
  }
};
