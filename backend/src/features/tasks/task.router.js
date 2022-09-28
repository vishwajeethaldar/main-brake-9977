const express =  require("express")
const Tasks = require("./task.model")
const authMiddleware = require("../middleware/authModdleware")

const app = express.Router();
// app.use(authMiddleware)
app.get("/", authMiddleware, async(req, res)=>{
   let id =  req.reqId;
   try{
        let tasks =  Tasks.find({userId:id})
        res.send(tasks)
   }catch(e){
    res.status(401).send(e.message)
   }
})

app.post("/",authMiddleware, async(req, res)=>{
    let {name} = req.body
    try{
        let task = await Tasks.find({name:name})
        if(task){
            return res.status(500).send("task already exist")
        }
        else{
            let newTask =  Tasks.create(rew.body)
            return res.status(200).send("task created successfully")
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
            await Projects.updateOne({...req.body})
            return res.send("Updated Successfully")
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
        await Tasks.deleteOne({_id:id})
        res.send("Deleted Successfully")
    }catch(e){
        res.status(400).send(e.message)
    }
})

module.exports =app