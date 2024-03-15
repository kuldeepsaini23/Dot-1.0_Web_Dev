const Book = require("../models/Book");
exports.getBook = async (req, res) => {
	try {
		const bookData = await Book.find({});
		res.json({ success: true, data: bookData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
