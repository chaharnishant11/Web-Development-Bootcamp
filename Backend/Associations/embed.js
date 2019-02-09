var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo",{ useNewUrlParser: true });

//Post

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);

//User

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User",userSchema);



// var newUser = new User({
//     email: "hermoine.hogwards@gmail.com",
//     name: "hermoine granger"
// });

// newUser.posts.push({
//   title:"how to use polyjuice poition",
//   content: "just kidding. go to poitions class to learn it"
// })

// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// })

// var newPost = Post({
//   title: "reflections on apples",
//   content: "They are delecious"
// });

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// })

User.findOne({name:"hermoine granger"},function(err,user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title: "The three things i hate the most!",
            content:"voldemort! voldemort! voldemort!"
        });
        user.save(function(err,user){
           if(err){
               console.log(err);
           }else{
               console.log(user);
           } 
        });
    }
});
