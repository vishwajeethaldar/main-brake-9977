const mongoose = require("mongoose");


const userSchema =new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, min:8}
})

const Users = mongoose.model("user", userSchema);
module.exports  = Users;
