
import express,{Router} from "express"
import Contactcontroller from "../controller/contactcontroller"



const router:Router = express.Router()

router.post("/send",Contactcontroller.sendmessage)
router.get("/get",Contactcontroller.getallmessage)

export default router