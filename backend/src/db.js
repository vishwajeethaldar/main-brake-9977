const mongoose =  require("mongoose")
const dotenv = require("dotenv") 
dotenv.config()

const connect = ()=>{
    return  mongoose.connect(process.env.MONGO_DB);
    // "mongodb+srv://clockify:clockify@cluster0.ixcohjq.mongodb.net/?retryWrites=true&w=majority"
 
}

module.exports = connect;