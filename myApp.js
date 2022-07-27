let express = require('express');
const { redirect } = require('express/lib/response');
let app = express();
require('dotenv').config();
var bodyParser = require("body-parser");


console.log("Hello World");


app.get("/", function(req,res){

    res.send("Hello Express");
})























 module.exports = app;
