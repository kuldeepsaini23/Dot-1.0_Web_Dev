const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
		maxLength: 20,
	},
	yearPublished: {
		type: String,
		required: true,
	},
	ISBN: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Book", bookSchema);
