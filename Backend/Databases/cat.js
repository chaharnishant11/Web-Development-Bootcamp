var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app",{useNewUrlParser: true});

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat",catSchema);

/*var norris = new Cat({
  name: "Mrs Norris",
  age: 15,
  temperament: "evil"
});

norris.save(function(err,cat){
    if(err){
        console.log("SOMETHINGH WENT WONRG");
    }else{
        console.log("We just saved a cat to the database:");
        console.log(cat);
    }
});*/

Cat.find({},function(err,cats){
    if(err){
        console.log("Something went wrong");
    }else{
        console.log(cats);
    }
})
