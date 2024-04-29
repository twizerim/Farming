"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function successmessage(res, status, message, datas) {
    res.status(status).json({
        message: message,
        data: datas
    });
}
exports.default = successmessage;
