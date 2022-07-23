let express = require('express');
const { redirect } = require('express/lib/response');
let app = express();
require('dotenv').config();
var bodyParser = require("body-parser");


// middleware use to console method, path and ip (with, req.)
app.use((req,res,next) => {
    
    //console.log(`${req.method} ${req.path} - ${req.ip}`);

    console.log(req.method + " " +req.path + " - " + req.ip);
    

    next();
})


// bodyParser method
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());





app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html");
    res.send('Hello Express');
})

app.use("/public", express.static(__dirname + "/public"))



// hidding information using env!
app.get("/json", function(req,res){

    if(process.env.MESSAGE_STYLE =='uppercase'){
        res.json({"message":'HELLO JSON'})
    }
    
    else{
        res.json({"message":'Hello json'})
    }
    
})



// middleware method
app.get('/now', (req,res,next)=>{
    req.time = new Date().toString();
     next();
},
(req,res)=>{ 
    res.json({time:req.time})
})



//req.params getting a information in the url by /:inf/
app.get('/:word/echo/',(req,res)=>{
    let word = req.params.word;
    res.json({"echo":word});
})


//localhost:3000/name?first=firstname&last=lastname   using "?" it`s possible create variables and  assigment "=" value to it!
app.get('/name', (req,res) =>{
    
    let first = req.query.first 
    let last = req.query.last
     

    res.json({"name":`${first} ${last}`})
})



// using body parse(req.body) geting information from the client!
app.post('/name', (req,res) =>{

    let first = req.body.first;
    let last = req.body.last;
    
    res.json({"name":`${first} ${last}`})
})



























 module.exports = app;
