const express =  require("express")
const Groups = require("./group.model")
const authMiddleware =  require("../middleware/authModdleware")
const app = express.Router();

app.get("/", authMiddleware, async(req, res)=>{
    let id = req.reqId;
    try{
        let groups = await Groups.find({userId:id})
        console.log(groups, id)
        res.send(groups)
    }catch(e){
        res.status(401).send(e.message)
    }
})


app.post("/", authMiddleware, async(req, res)=>{
    let {name} = req.body;
    try{
        let group = await Groups.findOne({name:name})
        if(!group){
            let newGroup = await Groups.create(req.body)
            res.send(newGroup)
        }else{
            res.send("Group already exist")
        }
        
    }catch(e){
        res.status(401).send(e.message)
    }

})

app.delete('/:id', authMiddleware, async(req, res)=>{
    let id = req.params.id;
    try{
        let group = await Groups.findOne({_id:id})

        if(group){
            await Groups.deleteOne({_id:id})
            return res.send(group)
        }else{
            return res.status(500).send("Group not found")
        }
        
    }catch(e){
        res.status(401).send(e.message)
    }
})

app.patch("/:id",authMiddleware, async(req, res)=>{
    let id = req.params.id;
    try{
        let group = await Groups.find({_id:id})
        if(group){
            await Groups.updateOne({_id:id}, {$set:{...req.body}})
            let updatedGroup = Groups.find({_id:id})
            return res.send(updatedGroup)
        }else{
            return res.status(500).send("Group not found")
        }
        
    }catch(e){
        res.status(401).send(e.message)
    }
})


module.exports =app