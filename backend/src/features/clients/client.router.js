const express = require("express")
const Clients = require("./client.model")
const authMiddleware  = require("../middleware/authModdleware")

const app = express.Router();

app.get("/", authMiddleware, async(req, res)=>{
    let id = req.reqId;
    let {q} = req.query
    try{
        if(q){
            let clients = await Clients.find({userId:id, name: { $regex: q, $options: "i" }})
            res.send(clients)
        }else{
            let clients = await Clients.find({userId:id})
            res.send(clients)
        }
        
    }catch(e){
        res.status(401).send(e.message)
    }
})

app.post("/", authMiddleware, async(req, res)=>{
    let {name} = req.body;
    try{
        let client = await Clients.findOne({name:name})
        if(client){
            res.send("client already exist")
        }else{
            let newClient = await Clients.create(req.body)
            res.send("client Added Successfully")
        }
        
    }catch(e){
        res.status(401).send(e.message)
    }
})
app.delete('/:id', authMiddleware, async(req, res)=>{
    let id = req.params.id;
    try{
        let client = await Clients.findOne({_id:id})
        if(client){
            await Clients.deleteOne({_id:id})
            return res.send("Deleted Successfully")
        }else{
            return res.status(401).send("client not found")
        }
        
    }catch(e){
        res.status(401).send(e.message)
    }
})

app.patch("/:id",authMiddleware, async(req, res)=>{
    let id = req.params.id;

    try{
        let client = await Clients.findOne({_id:id})
        if(client){
            let updated = await Clients.updateOne({_id:id}, {...req.body})
            return res.send(updated)
        }else{
            return res.status(500).send("client not found")
        }
    }catch(e){
        res.status(401).send(e.message)
    }
})

module.exports=app