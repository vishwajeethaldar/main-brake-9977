const express = require("express");
const Projects =  require("./project.model");
const authMiddleware =  require("../middleware/authModdleware")

const app = express.Router();
// authMiddleware

app.get("/", authMiddleware, async(req, res)=>{
    let id =  req.reqId
    let {q} = req.query
    try{
        if(q){
            let projectQ =  await Projects.find({userId:id, name: { $regex: q, $options: "i" } })
            res.send(projectQ)
        }else{
            let projects =  await Projects.find({userId:id})
            res.send(projects)
        }
    }catch(e){
        res.status(401).send(e.message)
    }
})

app.get("/id", (req, res)=>{
    res.send("")
})

app.post("/", authMiddleware, async(req, res)=>{
    let {name} = req.body
    try{
        let project = await Projects.findOne({name})
        if(project){
            return res.status(401).send("project already exist")
        }
        let newproject = await Projects.create(req.body)
        return res.send(newproject)
    }catch(e){
        res.status(401).send(e.message)
    }

})


app.patch("/id", authMiddleware, async(req, res)=>{
   let id = req.params.id;
    try{
        let project = await Projects.findById(id)
        if(project){
            await Projects.updateOne({_id:id}, { $set:{...req.body}})
            let updatedproject = await Projects.findById(id)
            return res.send(updatedproject)
        }else{
            return res.send("Project Not Matched")
        }
    }catch(e){
        res.status(400).send(e.message)
    }
})

app.delete("/:id", authMiddleware, async(req, res)=>{
    let id = req.params.id;
    try{
        let project = await Projects.findById(id)
        if(project){
            await Projects.deleteOne({_id:id})
            res.send(project)
        }else{
            res.status(401).send("project not found")
        }
       
    }catch(e){
        res.status(400).send(e.message)
    }
    
})

module.exports= app