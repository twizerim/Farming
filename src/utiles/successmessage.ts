import express,{Response} from "express"

function successmessage(res:Response,status:number,message:string,datas:any){
    res.status(status).json({
        message:message,
        data:datas
    })

}
export default successmessage