const express =  require("express");
const User =  require("./users.model")
const authMiddleware = require("../middleware/authModdleware")
const app = express.Router();

// app.get('/', async(req, res)=>{
//     let token = req.headers.token

//     let users = await User.find({},{password:0})
//     res.send(users)
// })

app.get('/:id',authMiddleware, async(req, res)=>{
    try{
        let user = await User.findById({_id:req.params.id})
        res.send(user);
    }catch(e){
        res.status(402).send(e.message);
    }
})
/*
app.post('/', async(req, res)=>{
     let {email} = req.body;
    try{
        let user = await User.findOne({email})
        if(user){
           return res.status(400).send("User already Exist")
        }else{
            let newuser = await User.create(req.body)
            return res.status(200).send("user added Successfully")
        }
    }catch(e){
        return res.status(401).send(e.message)
    }
})
*/
app.post('/login', async(req, res)=>{
    let {email, password} = req.body;
    try{
        let user = await User.findOne({email,password})
        if(!user){
            return res.status(401).send("Incorrect Credintial")
        }
        let token = `${user.id}:${user.email}:${user.password}`
        res.status(200).send({token:token, status:"success"})

    }catch(e){
        res.status(401).send(e.message)
    }
  
})


app.post('/signup', async(req, res)=>{
    let {email} = req.body;
    try{
        let user = await User.findOne({email})
        if(user){
           return res.status(400).send("User already Exist")
        }else{
            let newuser = await User.create(req.body)
            return res.status(200).send("user added Successfully")
        }
    }catch(e){
        return res.status(401).send(e.message)
    }
})

module.exports = app;
