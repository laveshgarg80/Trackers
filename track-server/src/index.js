const express = require("express")
require("./models/User")
require("./models/Track")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const authRoutes = require("./routes/authRoutes")
const requireAuth = require("./middlewares/requireAuth")
const trackRoutes = require("./routes/trackRoutes")

const App = express()

App.use(bodyParser.json())
App.use(authRoutes)
App.use(trackRoutes)

const mongoUri = "mongodb+srv://lavesh:ePJ1zw4ddpSM66s2@cluster0.og38h.mongodb.net/manishsir?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
})

mongoose.connection.on("connected",()=> {
     console.log("DB Connected")
})

mongoose.connection.on("error",(err) => {
    console.log("Error not able to connect to mongo db",err)
})

App.get("/",requireAuth ,(req,res) => {
    res.send(`your email: ${req.user.email}`)
})

App.listen(3000,() => {
    console.log("Server is running at port 3000")
})