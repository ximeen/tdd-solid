"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxItem_1 = __importDefault(require("./TaxItem"));
class Guarana extends TaxItem_1.default {
    constructor(description, price) {
        super("Gurana", description, price);
    }
    get_taxes() {
        return 10;
    }
}
exports.default = Guarana;
