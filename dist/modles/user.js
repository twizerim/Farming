"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userschemas = new mongoose_1.default.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    district: { type: String, required: true },
    password: { type: String, required: true },
    confrimpassword: { type: String, required: true },
    role: { type: String, enum: ["user", "investor", "admin"], default: "user" },
    signAt: { type: Date, default: new Date(Date.now()) },
});
const User = mongoose_1.default.model("User", userschemas);
exports.default = User;
