const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const jwt = require("jsonwebtoken")

const User = mongoose.model("User")

router.post("/signup",async(req,res) => {
    
    const {email,password} = req.body
    try{
       const user = new User({email,password})
       await user.save()
       const token = jwt.sign({userId: user._id},"MY_SECRET_STRING")
       res.send({token})
    }catch(error){
      return res.status(422).send(error.message)
    }
})

router.post("/signin" , async(req,res) => {
    const {email,password} = req.body

    if(!email || !password){
        return res.status(422).send({error: "Please add both the feilds"})
    }
    const user = await User.findOne({email: email})
    if(!user){
        return res.status(422).send({error: "Invalid email or password"})
    }

    try{
       await user.comparePassword(password)
       const token = jwt.sign({userId: user._id},"MY_SECRET_STRING")
       res.send({token})
    }catch(error){
        return res.status(422).send({error: "Invalid email or password"})
    }
})
module.exports = router