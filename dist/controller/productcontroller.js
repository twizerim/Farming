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
const product_1 = __importDefault(require("../modles/product"));
const errormessage_1 = __importDefault(require("../utiles/errormessage"));
const successmessage_1 = __importDefault(require("../utiles/successmessage"));
class productController {
    static postproduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { title, name, definition, description, quontity, price } = req.body;
            const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
            try {
                const product = yield product_1.default.create({ title, name, definition, description, quontity, price, image });
                if (!product) {
                    return (0, errormessage_1.default)(res, 401, "product not created");
                }
                else {
                    return (0, successmessage_1.default)(res, 201, "product successfuly created", product);
                }
            }
            catch (error) {
                return (0, errormessage_1.default)(res, 500, `error is ${error}`);
            }
        });
    }
    static getallproduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_1.default.find();
                if (!product) {
                    return (0, errormessage_1.default)(res, 401, "product not found");
                }
                else {
                    return (0, successmessage_1.default)(res, 200, "product successfuly retrived", product);
                }
            }
            catch (error) {
                return (0, errormessage_1.default)(res, 500, `error is ${error}`);
            }
        });
    }
    static getOneproduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const product = yield product_1.default.findById(id);
                if (!product) {
                    return (0, errormessage_1.default)(res, 401, "product not found");
                }
                else {
                    return (0, successmessage_1.default)(res, 200, `product on this id ${id} successfuly retrived`, product);
                }
            }
            catch (error) {
                return (0, errormessage_1.default)(res, 500, `error is ${error}`);
            }
        });
    }
}
exports.default = productController;
