// Setup empty JS object to act as endpoint for all routes
projectData = {};
const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
// Require Express to run server and routes

// Start up an instance of app
const app= express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({type:["appliction/json"]})) //to send from client to server
// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));

app.get("/",(req,res)=>{
  res.send("start")
  console.log(req)
});
let data=[]
app.post("/recive_data",(req,res)=>{
  respond=req.body
  console.log(respond)
  if (respond === "bad"){
    res.send({cont:"not found try another code " ,temp:"none"})
  }
  else{
  data.push(respond)
  console.log(data);
  res.send({temp:`${respond["main"]["temp"]}`,cont:`${respond}`});}
});
app.listen(8000,()=>console.log("server run"))
// Setup Server
