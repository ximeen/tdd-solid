"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class TaxItem extends Item_1.default {
    calculate_taxes() {
        return (this.price * this.get_taxes()) / 100;
    }
}
exports.default = TaxItem;
