var express = require("express");

var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
   res.render("home"); 
});

app.post("/add",function(req,res){
    res.send("you have reached the post route");
});

app.get("/friends",function(req,res){
    var friends = ["manad","krish","mukul","prince"];
    res.render("snakes",{friends: friends}); 
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("server started!"); 
});
