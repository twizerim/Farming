"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
dotenv_1.default.config();
const andela = (0, express_1.default)();
andela.use(body_parser_1.default.json());
andela.use((0, cors_1.default)());
andela.use("/api/v1", routers_1.default);
const portas = parseInt(process.env.PORT || "", 10);
const db = process.env.DATABASE || "";
mongoose_1.default.connect(db)
    .then(() => {
    console.log("Database successfully connected.....");
    andela.listen(portas, () => {
        console.log(`Server running on port ${portas}`);
    });
})
    .catch((error) => {
    console.error("Error connecting to database:", error);
});
exports.default = andela;
