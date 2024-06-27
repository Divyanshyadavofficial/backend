const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/posts");
app.get("/", function (req,res){
    res.send("hey");
})
app.get("/create",async function (req,res){
   let createdUser= await userModel.create({
        username:"harsh",
        age:"25",
        email:"harsh@gmail.com"
    })
    res.send(createdUser);
})
app.get("/post",async function (req,res){
   let post = await postModel.create({
        postdata:"hello kaise ho",
        user:"667c2257d37d7cc56d3c0cbe",
    
    })
   let user= await userModel.findOne({_id:"667c2257d37d7cc56d3c0cbe"});
   user.posts.push(post._id);
   await user.save();
    res.send({post,user});
 })
app.listen(3000);