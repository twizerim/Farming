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
const contact_1 = __importDefault(require("../modles/contact"));
class Contactcontroller {
    static sendmessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contact = yield contact_1.default.create(req.body);
                if (!contact) {
                    return (0, errormessage_1.default)(res, 401, "message not sent");
                }
                else {
                    return (0, successmessage_1.default)(res, 201, "message successfuly sent", contact);
                }
            }
            catch (error) {
                return (0, errormessage_1.default)(res, 500, `error is ${error}`);
            }
        });
    }
    static getallmessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contact = yield contact_1.default.find();
                if (!contact) {
                    return (0, errormessage_1.default)(res, 401, "no message found");
                }
                else {
                    return (0, successmessage_1.default)(res, 200, "message successfuly retrived", contact);
                }
            }
            catch (error) {
                return (0, errormessage_1.default)(res, 500, `error is ${error}`);
            }
        });
    }
}
exports.default = Contactcontroller;
