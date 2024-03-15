//import the model
const Todo = require("../models/Todo");

//Define route handler
exports.updateTodo = async (req, res) => {
  try {
    const {id} = req.params;
    const{title, description} = req.body

    const updateTodo = await Todo.findByIdAndUpdate(
      {_id:id},
      {title, description, updatedAt: Date.now()},
    )


      res.status(200).json({
        success:true,
        data:updateTodo,
        message:`Updated Successfully`,
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

