const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

//localfileupload -> handler function

exports.localFileUpload = async (req, res) => {
  try {
    //fetch filefrom request
    const file = req.files.file;
    console.log("FILE AAGYI JEE -> ", file);

    //create path where file need to be stored on server
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("PATH-> ", path);

    //add path to the move fucntion
    file.mv(path, (err) => {
      console.log(err);
    });

    //create a successful response
    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {
    console.log("Not able to upload the file on server");
    console.log(error);
  }
};

//checking file type
function isFileTypeSupported(type, supportedType) {
  return supportedType.includes(type);
}

//cloudinary upload function
async function uploadFileToCloudinary(
  file,
  folder,
  quality = 100,
  width,
  height,
  maxFileSize
) {
  const options = { folder };
  console.log("FilePath: ", file.tempFilePath);

  //!quality for iamge size reducer
  if (quality) {
    options.quality = quality;
  }

  //! I added all this
  if (width || width !== undefined) {
    options.width = width;
  }

  if (height || height !== undefined) {
    options.height = height;
  }

  if (maxFileSize || maxFileSize !== undefined) {
    options.maxFileSize = maxFileSize;
  }

  //!importatnt cheez hh baad me add videUpload ke liye
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

//image upload handler
exports.imageUpload = async (req, res) => {
  try {
    //Data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    //file recieve
    const file = req.files.imageFile;
    console.log(file);

    //Validation
    const supportedType = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log(fileType);

    //file format not supported
    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File Format Not Supported",
      });
    }

    //fiel format supported
    const response = await uploadFileToCloudinary(file, "Kuldeep");
    console.log("Response: ", response);

    //DB me entry
    // const fileData = await File.create({
    //     name,
    //     tags,
    //     email,
    //     imageUrl:response.secure_url,
    // });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Successfully Uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

//Video Upload
exports.videoUpload = async (req, res) => {
  try {
    //Data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    //file recieve
    const file = req.files.videoFile;
    console.log(file);

    //Validation
    const supportedType = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log(fileType);

    //! Add a upper limit of 5mb
    //file format not supported
    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File Format Not Supported",
      });
    }

    //fiel format supported
    console.log("uploading to CLod");
    const response = await uploadFileToCloudinary(file, "Kuldeep");
    console.log("response", response);

    //DB me entry
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Video Successfully Uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

exports.imageSizeReducer = async (req, res) => {
  try {
    //Data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    //file recieve
    const file = req.files.imageFile;
    console.log(file);

    //Validation
    const supportedType = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log(fileType);

    //! Add a upper limit of 5mb
    //file format not supported
    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File Format Not Supported",
      });
    }

    //fiel format supported
    console.log("uploading to CLod");
    const response = await uploadFileToCloudinary(file, "Kuldeep", 30);
    console.log("response", response);

    //DB me entry
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Reduce Image Successfully Uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};
