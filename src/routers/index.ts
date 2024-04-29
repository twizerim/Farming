
import express,{Router} from "express"
import userRouter from "./userRouter"
import contactRouter from "./contactRouter"
import productRouter from "./productRouter"
import didyouRouter from "./didyouRouter"


const router:Router = express.Router()

router.use("/user",userRouter)
router.use("/contact",contactRouter)
router.use("/product",productRouter)
router.use("/didyou",didyouRouter)


export default router