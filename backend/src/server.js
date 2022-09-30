const express =  require("express")
const cors =  require("cors")
const dotenv = require("dotenv")
const connect = require("./db");
const userRouter = require("./features/users/users.route")
const projectRouter = require("./features/projects/project.router")
const taskRouter = require("./features/tasks/task.router")
const groupRouter =  require("./features/groups/group.router")
const clientRouter =  require("./features/clients/client.router")
const app = express();
dotenv.config()
app.use(cors());

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("working")
})
app.use("/users", userRouter);
app.use("/projects", projectRouter)
app.use("/tasks", taskRouter)
app.use("/groups", groupRouter)
app.use("/clients", clientRouter)

app.listen(process.env.PORT||8080, async()=>{
    await connect();
    console.log("server running http://localhost:8080");   
})