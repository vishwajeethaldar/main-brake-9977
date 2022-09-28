const mongoose = require("mongoose");


const clientSchema =new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:false},
    note:{type:String, required:false},
    archive:{type:Boolean, default:false},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",  require:true}
})



const Clients = mongoose.model("client", clientSchema);
module.exports  = Clients;
