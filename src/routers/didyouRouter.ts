
import express,{Router} from "express"
import didyouController from "../controller/didyoucontroller"


const router:Router=express.Router()

router.post("/post",didyouController.postDidyou)
router.get("/get",didyouController.getDidyou)

export default router