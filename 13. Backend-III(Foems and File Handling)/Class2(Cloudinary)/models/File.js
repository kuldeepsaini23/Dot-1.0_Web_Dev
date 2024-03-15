const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tage: {
    type: String,
  },
  email: {
    type: String,
  },
});

const File = mongoose.model("File", fileSchema);
module.exports = File;