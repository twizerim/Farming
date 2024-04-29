"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productschemas = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    definition: { type: String, required: true },
    price: { type: Number, required: true },
    quontity: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    postAt: { type: Date, default: new Date(Date.now()) },
});
const Product = mongoose_1.default.model("Product", productschemas);
exports.default = Product;
