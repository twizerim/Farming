
import mongoose from "mongoose";

const userschemas = new mongoose.Schema({

    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    email:{type:String,required:true},
    district:{type:String,required:true},
    password:{type:String,required:true},
    confrimpassword:{type:String,required:true},
    role:{type:String,enum:["user","investor","admin"],default:"user"},
    signAt:{type:Date,default:new Date(Date.now())},

})

const User = mongoose.model("User",userschemas)

export default User