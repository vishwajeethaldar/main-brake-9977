const mongoose = require("mongoose");


const groupSchema =new mongoose.Schema({
    name:{type:String, required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true}
})



const Groups = mongoose.model("group", groupSchema);
module.exports  = Groups;
