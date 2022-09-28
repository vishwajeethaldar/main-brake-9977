const express = require("express");
const Projects =  require("./project.model");
const authMiddleware =  require("../middleware/authModdleware")

const app = express.Router();

app.get("/",authMiddleware, async(req, res)=>{
    let id =  req.reqId
    try{
        let projects =  await Projects.find({userId:id})
        res.send(projects)
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
        console.log(project)
        if(project){
            return res.status(401).send("project already exist")
        }
        let newproject = await Projects.create(req.body)
        return res.send("Project Created Successfully.")
    }catch(e){
        res.status(401).send(e.message)
    }

})


app.patch("/id", authMiddleware, async(req, res)=>{
   let id = req.params.id;
    try{
        let project = await Projects.findById(id)
        if(project){
            await Projects.updateOne({_id:id}, {...req.body})
            return res.send("Updated Successfully")
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
        await Projects.deleteOne({_id:id})
        res.send("Deleted Successfully")
    }catch(e){
        res.status(400).send(e.message)
    }
    
})

module.exports= app