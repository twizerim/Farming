"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const didiyouschemas = new mongoose_1.default.Schema({
    auth: { type: String, required: true },
    message: { type: String, required: true },
    postAt: { type: Date, default: new Date(Date.now()) },
});
const Didyou = mongoose_1.default.model("Didyou", didiyouschemas);
exports.default = Didyou;
