
import express,{Router} from "express"
import Usercontroller from "../controller/usercontroller"



const router:Router = express.Router()
router.post("/signup",Usercontroller.createuser)
router.post("/login",Usercontroller.Login)
router.get("/get",Usercontroller.getalluser)

export default router