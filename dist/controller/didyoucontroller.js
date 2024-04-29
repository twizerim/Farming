"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errormessage_1 = __importDefault(require("../utiles/errormessage"));
const successmessage_1 = __importDefault(require("../utiles/successmessage"));
const didyou_1 = __importDefault(require("../modles/didyou"));
class didyouController {
    static postDidyou(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const disyou = yield didyou_1.default.create(req.body);
                if (!disyou) {
                    return (0, errormessage_1.default)(res, 401, "no message posted");
                }
                else {
                    return (0, successmessage_1.default)(res, 201, "message successfuly posted", disyou);
                }
            }
            catch (error) {
                return (0, errormessage_1.default)(res, 500, `error is ${error}`);
            }
        });
    }
    static getDidyou(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const disyou = yield didyou_1.default.find();
                if (!disyou) {
                    return (0, errormessage_1.default)(res, 401, "no message found");
                }
                else {
                    return (0, successmessage_1.default)(res, 201, "message successfuly retrived", disyou);
                }
            }
            catch (error) {
                return (0, errormessage_1.default)(res, 500, `error is ${error}`);
            }
        });
    }
}
exports.default = didyouController;
