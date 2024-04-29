"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./userRouter"));
const contactRouter_1 = __importDefault(require("./contactRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const didyouRouter_1 = __importDefault(require("./didyouRouter"));
const router = express_1.default.Router();
router.use("/user", userRouter_1.default);
router.use("/contact", contactRouter_1.default);
router.use("/product", productRouter_1.default);
router.use("/didyou", didyouRouter_1.default);
exports.default = router;
