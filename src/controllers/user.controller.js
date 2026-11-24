let usermodel = require("../models/user")


exports.register = async(req,res)=>{
    let {Name,Email,Password,Role} = req.body
    let user =usermodel({Name,Email,Password,Role})
    await user.save()
    res.json({msg:"Data Saved Successfully",user})
}

exports.getting = async(req,res)=>{
    let user = await usermodel.get()
    res.json({msg:"data Getted Successfully",user})
}

