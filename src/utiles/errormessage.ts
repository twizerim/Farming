import express,{Response} from "express"

function errormessage(res:Response,status:number,message:string){
    res.status(status).json({
        message:message
    })

}
export default errormessage