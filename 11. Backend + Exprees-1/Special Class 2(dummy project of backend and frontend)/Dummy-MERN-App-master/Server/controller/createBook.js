const Book = require("../models/Book");


exports.createBook = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { title, author, yearPublished, ISBN } = req.body;
    if (!title || !author || !yearPublished || !ISBN) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const book = await Book.create({
      title,
      author,
      yearPublished,
      ISBN,
    });
    return res.status(200).json({
      status: 201,
      message: "Book created successfully",
      data: Book,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, yearPublished, ISBN } = req.body;
    const book=  await Book.findById(id);

    const updateBook = await Book.findByIdAndUpdate(
      { _id: id },
      {
        title: title || book.title,
        author: author || book.author,
        yearPublished: yearPublished || book.yearPublished,
        ISBN: ISBN || book.ISBN,
      }
    );

    res.status(200).json({
      success: true,
      data: updateBook,
      message: `Updated Successfully`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBooks = await Book.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Book DELETED",

    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
