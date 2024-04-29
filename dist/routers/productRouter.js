"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productcontroller_1 = __importDefault(require("../controller/productcontroller"));
const uploadproduct_1 = __importDefault(require("../middleware/uploadproduct"));
const router = express_1.default.Router();
router.post("/post", uploadproduct_1.default.single("image"), productcontroller_1.default.postproduct);
router.get("/get", productcontroller_1.default.getallproduct);
router.get("/get/:id", productcontroller_1.default.getOneproduct);
exports.default = router;
