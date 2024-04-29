
import express,{Request,Response} from "express"
import errormessage from "../utiles/errormessage"
import successmessage from "../utiles/successmessage"
import Didyou from "../modles/didyou"


class didyouController{

    public static async postDidyou(req:Request,res:Response):Promise<void>{
        try {
            const disyou = await Didyou.create(req.body)
            if(!disyou){
                return errormessage(res,401,"no message posted")
            }else{
                return successmessage(res,201,"message successfuly posted",disyou)
            }
        } catch (error) {
            return errormessage (res,500,`error is ${error}`)
        }
    }

    public static async getDidyou(req:Request,res:Response):Promise<void>{
        try {
            const disyou = await Didyou.find()
            if(!disyou){
                return errormessage(res,401,"no message found")
            }else{
                return successmessage(res,201,"message successfuly retrived",disyou)
            }
        } catch (error) {
            return errormessage (res,500,`error is ${error}`)
        }
    }

}
export default didyouController