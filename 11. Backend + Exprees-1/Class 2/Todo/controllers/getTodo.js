//import the model
const Todo = require("../models/Todo");

//Define route handler
exports.getTodo = async (req, res) => {
  try {
    //fetch all Todo items from database
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data:todos,
      message: "Entry Cretaed Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500)
    .json({
      success:false,
      error:err,
      message:err.message,
    }) 
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //fetch all Todo items from database
    const id = req.params.id;
    const todo = await Todo.find({_id:id});

    //data forgiven id not found
    if(!todo){
      return res.status(404).json({
        success:false,
        message:"No Data Found With Given Id",
      })
    }

    //data for given id Found
    res.status(200).json({
      success:true,
      data:todo,
      message:`Todo ${id} data successfully fetched`
    })
  } catch (err) {
    console.log(err);
    res.status(500)
    .json({
      success:false,
      error:err,
      message:err.message,
    }) 
  }
};