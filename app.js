const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view enagine","ejs");
app.use(express.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.send("This webpage is working fine");
});

app.post("/",function(req,res){
    console.log(req.body.ele1);
});



app.listen(8000,function(){
    console.log("Server Stared");
});