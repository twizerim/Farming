
import mongoose from "mongoose";


const didiyouschemas = new mongoose.Schema({
    auth:{type:String,required:true},
    message:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())},
})
const Didyou = mongoose.model("Didyou",didiyouschemas)
export default Didyou