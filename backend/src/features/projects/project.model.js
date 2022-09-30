const mongoose = require("mongoose");


const projectSchema =new mongoose.Schema({
    name:{type:String, required:true},
    client:{type:String, required:false},
    clientId:{type:mongoose.Schema.Types.ObjectId,ref:"client", required:false},
    tracked:{type:Number, default:0.00},
    amount:{type:Number, default:0.00},
    billable:{type:Boolean, default:true}, 
    access:{type:Boolean, default:true},
    color:{type:String, required:false},
    archive:{type:Boolean, default:false},
    starred:{type:Boolean, default:false},
    startTime:{type:Number,required:false},
    endTime:{type:Number,required:false},
    template:{type:String,required:false},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",  require:true},
    
})

const Projects = mongoose.model("project", projectSchema);
module.exports  = Projects;
