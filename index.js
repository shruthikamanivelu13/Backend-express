const express = require("express")

const app = express()

const body = require("body-parser")

app.use(body.json())

const cors = require("cors")

app.use(cors())

require("dotenv").config()

const port = process.env.PORT_NO

const mongoosedb = require("./src/config/db")

mongoosedb()

// user 

let user = require("./src/routers/user.routes")

app.use("/user",user)

app.listen(port,()=>console.log("server Running on port",port))