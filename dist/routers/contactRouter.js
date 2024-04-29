"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactcontroller_1 = __importDefault(require("../controller/contactcontroller"));
const router = express_1.default.Router();
router.post("/send", contactcontroller_1.default.sendmessage);
router.get("/get", contactcontroller_1.default.getallmessage);
exports.default = router;
