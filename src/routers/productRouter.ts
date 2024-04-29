
import express,{Router} from "express"
import productController from "../controller/productcontroller"
import upload from "../middleware/uploadproduct"


const router:Router = express.Router()
router.post("/post",upload.single("image"),productController.postproduct)
router.get("/get",productController.getallproduct)
router.get("/get/:id",productController.getOneproduct)

export default router