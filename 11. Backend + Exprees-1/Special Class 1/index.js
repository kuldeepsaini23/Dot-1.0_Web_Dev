const express = require('express');
const app = express();
const port = 3000;

app.listen(port,()=>{
  console.log(`Port started at ${port}`);
})
//adding middleware
app.use(express.json());

//get routes
app.get("/",(req,res)=>{
  res.send("<h1>Hello world</h1>")
})