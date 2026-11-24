const mongoose = require("mongoose")

let url = process.env.URL

let mongoosedb = async()=>{
    try{
       await mongoose.connect(url)
       console.log("Db Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports=mongoosedb