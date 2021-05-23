const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req,res,next) => {
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).send({error: "you cant logged in"})
    }

    const token = authorization.replace("Bearer ","");

    jwt.verify(token,"MY_SECRET_STRING", async(error,payload) => {
        if(error){
            return res.status(401).send({error: "you cant logged in"});
        }
        const { userId } = payload;

        const user = await User.findById(userId)
        req.user = user;
        next()
    })
}