const mongoose = require("mongoose");


const taskSchema =new mongoose.Schema({
    name:{type:String, required:true},
    billable:{type:Boolean, default:true}, 
    startTime:{type:Number,required:false},
    endTime:{type:Number,required:false},
    totalTime:{type:Number, default:0.00},
    sTime:{type:String, required:true},
    eTime:{type:String, required:true},
    projectID:{type:mongoose.Schema.Types.ObjectId,ref:"project",  require:false},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true}
})

const Tasks = mongoose.model("task", taskSchema);
module.exports  = Tasks;
