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
const bcrypt_1 = __importDefault(require("bcrypt"));
const errormessage_1 = __importDefault(require("../utiles/errormessage"));
const user_1 = __importDefault(require("../modles/user"));
const successmessage_1 = __importDefault(require("../utiles/successmessage"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Usercontroller {
    static createuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, email, phoneNumber, district, password, confrimpassword, role } = req.body;
            if (req.body.password !== req.body.confrimpassword) {
                return (0, errormessage_1.default)(res, 401, "please your password and confrim password not match");
            }
            else {
                const hashpassword = bcrypt_1.default.hashSync(req.body.password, 10);
                const hashconfrimpassword = bcrypt_1.default.hashSync(req.body.confrimpassword, 10);
                try {
                    const user = yield user_1.default.create({ firstname, lastname, email, phoneNumber, district, password: hashpassword,
                        confrimpassword: hashconfrimpassword, role });
                    if (!user) {
                        return (0, errormessage_1.default)(res, 401, "user not created try again");
                    }
                    else {
                        return (0, successmessage_1.default)(res, 201, "user successfuly created", user);
                    }
                }
                catch (error) {
                    return (0, errormessage_1.default)(res, 500, `error is ${error}`);
                }
            }
        });
    }
    static Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield user_1.default.findOne({ email });
            if (!user) {
                return (0, errormessage_1.default)(res, 401, "please invalid email or password");
            }
            else {
                const comparepassword = bcrypt_1.default.compareSync(password, user.password);
                if (!comparepassword) {
                    return (0, errormessage_1.default)(res, 401, "please invalid password or email");
                }
                else {
                    const SCRET_KY = 'gedeonprogrammer';
                    const token = jsonwebtoken_1.default.sign({ user: user }, SCRET_KY, { expiresIn: "1d" });
                    res.status(201).json({
                        token: token,
                        data: {
                            user: user
                        }
                    });
                }
            }
        });
    }
    static getalluser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.find();
                if (!user) {
                    return (0, errormessage_1.default)(res, 401, "no user found");
                }
                else {
                    return (0, successmessage_1.default)(res, 200, "user successfuly retrived", user);
                }
            }
            catch (error) {
                return (0, errormessage_1.default)(res, 500, `error is ${error}`);
            }
        });
    }
}
exports.default = Usercontroller;
