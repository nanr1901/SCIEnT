require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const rootRouter = require("./router/root_router")

try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("connected to db")
}
catch(error) {
    console.log("Error in db ",error)
}
app.use(express.json())
app.use(cors())
app.use("/",rootRouter)

module.exports = app;