
import express,{Request,Response} from "express"
import errormessage from "../utiles/errormessage"
import successmessage from "../utiles/successmessage"
import Contact from "../modles/contact"



class Contactcontroller{

    public static async  sendmessage(req:Request,res:Response):Promise<void>{

        try {
            const contact = await Contact.create(req.body)
            if(!contact){
                return errormessage(res,401,"message not sent")
            }else{
                return successmessage(res,201,"message successfuly sent",contact)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    public static async  getallmessage(req:Request,res:Response):Promise<void>{
         try {
            const contact =await Contact.find()
            if(!contact){
                return errormessage(res,401,"no message found")
            }else{
                return successmessage(res,200,"message successfuly retrived",contact)
            }
         } catch (error) {
            return errormessage(res,500,`error is ${error}`)
         }
    }
}
export default Contactcontroller