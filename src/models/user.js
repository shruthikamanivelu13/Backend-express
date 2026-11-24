const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    Password:{
        type:String,
        required:true,
        trim:true,
    },
    Role:{
        type:String,
        enum:["Admin","User"],
        default:"User",
        trim:true
    }
})

const usermodel = mongoose.model("User",userschema)

module.exports=usermodel