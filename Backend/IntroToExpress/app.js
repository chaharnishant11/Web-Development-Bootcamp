var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("hi there!");
});

app.get("/bye",function(req,res){
    res.send("good bye!");
});

app.get("/dog",function(req,res){
    res.send("bhow bhow!");
});

app.get("/r/:sub",function(req,res){
    res.send("LOL this is not what you wanted XD");
});

app.get("*",function(req,res){
    res.send("HI STAR!");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started!")
});
