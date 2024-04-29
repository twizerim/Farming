
import express,{Request,Response} from "express"
import bcrypt from "bcrypt"
import errormessage from "../utiles/errormessage"
import User from "../modles/user"
import successmessage from "../utiles/successmessage"
import  jwt  from "jsonwebtoken"





class Usercontroller{

    public static async createuser(req:Request,res:Response):Promise<void>{
        const {firstname,lastname,email,phoneNumber,district,password,confrimpassword,role}=req.body

        if(req.body.password !== req.body.confrimpassword){
            return errormessage(res,401,"please your password and confrim password not match")
        }else{
            const hashpassword = bcrypt.hashSync(req.body.password,10)
            const hashconfrimpassword = bcrypt.hashSync(req.body.confrimpassword,10)

            try {
                const user = await User.create({firstname,lastname,email,phoneNumber,district,password:hashpassword,
                    confrimpassword:hashconfrimpassword,role})

                    if(!user){
                        return errormessage(res,401,"user not created try again")
                    }else{
                        return successmessage(res,201,"user successfuly created",user)
                    }
            } catch (error) {
                return errormessage(res,500,`error is ${error}`)
            }
        }
    }

    public static async Login(req:Request,res:Response):Promise<void>{

        const {email,password}=req.body
         const user = await User.findOne({email})
         if(!user){
            return errormessage(res,401,"please invalid email or password")

         }else{
            const comparepassword = bcrypt.compareSync(password,user.password)
            if(!comparepassword){
                return errormessage(res,401,"please invalid password or email")
            }else{
                const SCRET_KY = 'gedeonprogrammer'
                const token=jwt.sign({user:user},SCRET_KY,{expiresIn:"1d"})

                res.status(201).json({
                    token:token,
                    data:{
                       user:user
                    }
               })
            }
         }
    }

    public static async getalluser(req:Request,res:Response):Promise<void>{
           try {
            const user = await User.find()
            if(!user){
                return errormessage(res,401,"no user found")
            }else{
                return successmessage(res,200,"user successfuly retrived",user)
            }
           } catch (error) {
            return errormessage(res,500,`error is ${error}`)
           }
    }
}
export default Usercontroller