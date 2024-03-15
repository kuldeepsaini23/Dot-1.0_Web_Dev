//import the model
const Todo = require("../models/Todo");

//Define route handler
exports.deleteTodo = async (req, res) => {
  try {
    const{id} = req.params;

    await Todo.findByIdAndDelete(id);
    
    res.status(200).json({
      sucess:true,
      messgae:"Todo Deleted "
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

