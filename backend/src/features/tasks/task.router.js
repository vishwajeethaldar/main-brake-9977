const express =  require("express")
const Tasks = require("./task.model")
const authMiddleware = require("../middleware/authModdleware")

const app = express.Router();
// app.use(authMiddleware)

app.get("/", authMiddleware, async(req, res)=>{
   let id =  req.reqId;
   let {q} = req.query
   try{
        if(q){
            let tasks =  await Tasks.find({userId:id,name: { $regex: q, $options: "i" } })
            res.send(tasks)
        }else{
            let tasks =  await Tasks.find({userId:id})
            res.send(tasks)
        }
        
   }catch(e){
    res.send(e.message)
   }
})

app.post("/",authMiddleware, async(req, res)=>{
    let {name} = req.body

    try{
        let task = await Tasks.findOne({name:name})
        if(task){
            return res.status(400).send("task already exist")
        }
        else{
            let newTask = await Tasks.create(req.body)
            return res.status(200).send(newTask)
        }
    }catch(e){
        res.status(401).send(e.message)
    }
})

app.patch("/:id", authMiddleware, async(req, res)=>{
    let id = req.params.id;
    try{
        let task = await Tasks.findById(id)
        if(task){
            let taskUpda = await Tasks.updateOne({_id:task._id},{ $set:{...req.body}})
            let updatedTasks = await Tasks.findById(id)
            return res.send(updatedTasks)
        }else{
            return res.send("task Not Found")
        }
        
    }catch(e){
        res.status(400).send(e.message)
    }
})

app.delete("/:id", authMiddleware, async(req, res)=>{
    let id = req.params.id;
    try{
        let task = await Tasks.findById(id)
        await Tasks.deleteOne({_id:id})
        res.send("deleted Success")
    }catch(e){
        res.status(400).send(e.message)
    }
})

module.exports =app