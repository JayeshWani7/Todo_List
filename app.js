const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
/*var items = [];
var example = "working";
app.get("/",function(req,res){
    res.render("list",{ejes : items});
});

app.post("/",function(req,res){
    var item = req.body.ele1;
    items.push(item);
    res.redirect("/"); 
});

app.listen(8000,function(){
    console.log("Server Stared");
});*/
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema = new mongoose.Schema({
    name:String
});
const item = mongoose.model("task",trySchema);
const todo = new item({
    name:"Create Some Videos"
}); 
const todo2 = new item({
    name:"Learn DSA"
});
const todo3 = new item({
    name:"Learn React"
});
const todo4 = new item({
    name:"Take Some Rest"
});
todo.save;
todo2.save;
todo3.save;
todo4.save;