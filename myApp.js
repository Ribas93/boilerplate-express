
require('dotenv').config()
let express = require('express');
const { redirect } = require('express/lib/response');
let app = express();


app.use((req,res,next) => {
    
    //console.log(`${req.method} ${req.path} - ${req.ip}`);

    console.log(req.method + " " +req.path + " - " + req.ip);
    

    next();
})



/*app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html");
    // res.send('Hello Express');
})

app.use("/public", express.static(__dirname + "/public"))
*/



app.get("/json", function(req,res){

    if(process.env.MESSAGE_STYLE =='uppercase'){
        res.json({"message":'HELLO JSON'})
    }
    
    else{
        res.json({"message":'Hello json'})
    }
    
})

app.get('/now', (req,res,next)=>{
    req.time = new Date().toString();
     next();
},
(req,res)=>{ 
    res.json({time:req.time})
})

app.get('/:word/echo/',(req,res)=>{
    let word = req.params.word;
    res.json({"echo":word});
})



app.get('/name', (req,res) =>{
    
    let first = req.query.first 
    let last = req.query.last
     

    res.json({"name":`${first} ${last}`})
})




























 module.exports = app;
