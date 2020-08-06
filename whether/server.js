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
  res.send()
  console.log(req)
});
let data=[]
app.post("/recive_data",(req,res)=>{
  data.push(req.body)
  console.log(data);
  res.json(req.body);

});
app.listen(8000,()=>console.log("server run"))
// Setup Server
