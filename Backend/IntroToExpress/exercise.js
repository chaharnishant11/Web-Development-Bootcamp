var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("Hi there,Welcome to my assignment!");
});

app.get("/speak/:animal",function(req,res){
    var animal = req.params.animal;
    if(animal === "dog"){
        res.send("The "+animal+" says woof");    
    }else if(animal === "cat"){
        res.send("The "+animal+" says meow");    
    }else if(animal === "pig"){
        res.send("The "+animal+" says oink");    
    }else if(animal === "bird"){
        res.send("The "+animal+" says chirp chirp");    
    }else if(animal === "human"){
        res.send("The "+animal+" says hatt teri maa ki");    
    }
    
});

app.get("/repeat/:variable/:num",function(req,res){
    var variable = req.params.variable;
    var num = req.params.num;
    var out = variable;
    for(var i=0;i<num-1;i++){
        out =out + " " +variable;
    }
    res.send(out);
});

app.get("*",function(req,res){
    res.send("Sorry page not found....what are you doing with your life");
});



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started!")
});
