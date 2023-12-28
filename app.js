const bodyParser = require("body-parser");
/*var Item = [];
var example = "working";
app.get("/",function(req,res){
    res.render("list",{ejes : Item});
});

app.post("/",function(req,res){
    var item = req.body.ele1;
    Item.push(item);
    res.redirect("/"); 
});

app.listen(8000,function(){
    console.log("Server Stared");
});*/
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/todo");

const trySchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Item", trySchema); // Use uppercase for model names by convention

/*const todo = new Item({ name: "Create Some Videos" });
const todo2 = new Item({ name: "Learn DSA" });
const todo3 = new Item({ name: "Learn React" });
const todo4 = new Item({ name: "Take Some Rest" });
*/
// Save the Item to the database
/* todo.save()
    .then(() => {
        console.log("Todo saved");
    })
    .catch((err) => {
        console.error("Error saving Todo:", err);
    });

todo2.save()
    .then(() => {
        console.log("Todo2 saved");
    })
    .catch((err) => {
        console.error("Error saving Todo2:", err);
    });

todo3.save()
    .then(() => {
        console.log("Todo3 saved");
    })
    .catch((err) => {
        console.error("Error saving Todo3:", err);
    });

todo4.save()
    .then(() => {
        console.log("Todo4 saved");
    })
    .catch((err) => {
        console.error("Error saving Todo4:", err);
    });*/
    app.get("/", async function(req, res) {
        try {
            const foundItems = await Item.find({});
            res.render("list", { dayej: foundItems });
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    });
    app.post("/",function(req,res){
        const itemName = req.body.ele1;
        const todo = new Item({
            name:itemName
        });
        todo.save();
        res.redirect("/");
    });
    app.post("/delete", function (req, res) {
        const checked = req.body.checkbox1;
        Item.findByIdAndDelete(checked)
            .then((deletedItem) => {
                if (deletedItem) {
                    console.log("Deleted:", deletedItem);
                    res.redirect("/");
                } else {
                    console.log("Item not found");
                    res.redirect("/");
                }
            })
            .catch((err) => {
                console.error("Error:", err);
                res.status(500).send("Internal Server Error");
            });
    });
    
    
    app.listen(4000, function() {
        console.log("Server is running on port 4000");
    });