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

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started!")
});
