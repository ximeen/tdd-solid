"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Agua extends Item_1.default {
    constructor(description, price) {
        super("Agua", description, price);
    }
    get_taxes() {
        throw new Error("Agua é isenta de impostos");
    }
}
exports.default = Agua;
