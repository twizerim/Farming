

import express,{Request,Response} from "express"
import Product from "../modles/product"
import errormessage from "../utiles/errormessage"
import successmessage from "../utiles/successmessage"



class productController{
    public static async postproduct(req:Request,res:Response):Promise<void>{
         const {title,name,definition,description,quontity,price}=req.body
         const image = req.file?.path

         try {
            const product = await Product.create({title,name,definition,description,quontity,price,image})
            if(!product){
                return errormessage(res,401,"product not created")
            }else{
                return successmessage(res,201,"product successfuly created",product)
            }
         } catch (error) {
             return errormessage (res,500,`error is ${error}`)
         }
    }

    public static async getallproduct(req:Request,res:Response):Promise<void>{
        try {
            const product = await Product.find()
            if(!product){
                return errormessage(res,401,"product not found")
            }else{
                return successmessage(res,200,"product successfuly retrived",product)
            }
         } catch (error) {
             return errormessage (res,500,`error is ${error}`)
         }
    }

    public static async getOneproduct(req:Request,res:Response):Promise<void>{
        const id: string = req.params.id;
        try {
            const product = await Product.findById(id)
            if(!product){
                return errormessage(res,401,"product not found")
            }else{
                return successmessage(res,200,`product on this id ${id} successfuly retrived`,product)
            }
         } catch (error) {
             return errormessage (res,500,`error is ${error}`)
         }
    }

}
export default productController