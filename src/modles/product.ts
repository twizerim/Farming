
import mongoose from "mongoose";

const productschemas = new mongoose.Schema({

    title:{type:String,required:true},
    name:{type:String,required:true},
    definition:{type:String,required:true},
    price:{type:Number,required:true},
    quontity:{type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())},

})
const Product = mongoose.model("Product",productschemas)

export default Product