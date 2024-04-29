"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usercontroller_1 = __importDefault(require("../controller/usercontroller"));
const router = express_1.default.Router();
router.post("/signup", usercontroller_1.default.createuser);
router.post("/login", usercontroller_1.default.Login);
router.get("/get", usercontroller_1.default.getalluser);
exports.default = router;
