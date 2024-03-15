const express  = require("express");
const router = express.Router();

// import handlers
const {contact} = require("../Controller/Conatct");

//router
router.post("/conatctUs", contact);

module.exports = router;