let express = require('express');
const { redirect } = require('express/lib/response');
let app = express();
require('dotenv').config();
var bodyParser = require("body-parser");
const req = require('express/lib/request');


console.log("Hello World");

app.use((req,res,next)=>{
    let method = req.method;
    let path = req.path;
    let ip = req.ip;

    console.log(`${method} ${path} - ${ip}`);
    next();
})


app.get("/now", (req,res,next) => {

    req.time = new Date().toString(); 
    next()

},(req,res)=>{res.json({"time":req.time})})


app.get("/", function(req,res){

    res.sendfile(__dirname + "/views/index.html");
})


app.use("/public", express.static(__dirname + "/public"));

let answer = "Hello json";
app.get("/json", (req,res) => {
    
  if (process.env.MESSAGE_STYLE == "uppercase")
  {
      res.json({"message":answer.toUpperCase()});  
  }
  else
  {
      res.json({"message":answer})
  }
    
})


app.get("/:word/echo",(req,res)=>{
    res.json({"echo":req.params.word});
})

// ?first=firstname&last=lastname.
app.route("/name").get((req,res)=>{
let first = req.query.first;
let last = req.query.last;
res.json({"name":`${first} ${last}`})
})
.post((req,res) => {})















 module.exports = app;
