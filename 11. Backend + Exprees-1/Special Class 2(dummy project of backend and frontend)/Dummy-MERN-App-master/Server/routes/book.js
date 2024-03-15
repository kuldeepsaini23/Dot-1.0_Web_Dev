const express = require("express");
const router = express.Router();
const { createBook, deleteBook, updateBook } = require("../controller/createBook");
const { getBook } = require("../controller/getBooks");
router.post("/createBook", createBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);
router.get("/getallBooks", getBook);

module.exports = router;
