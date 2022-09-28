const User = require("../users/users.model")
const authMiddleware = async(req, res, next)=>{
    let token  =  req.headers.token;

    if(token){
        let [id, email, password] = token.split(":");

        let user = await User.findById(id);

        if(user.email===email & user.password===password){
            req.reqId = id;
            next();
        }
    }else{
        res.status(401).send("Unauthorized Access")
    }
}

module.exports = authMiddleware