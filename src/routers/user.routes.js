let express = require("express")
let router = express.Router()

let {register,getting} = require("../controllers/user.controller")

router.post("/post",register)

router.get("/get",getting)

module.exports=router