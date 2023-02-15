"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxItem_1 = __importDefault(require("./TaxItem"));
class Order {
    constructor() {
        this.items = [];
    }
    add_item(item) {
        this.items.push(item);
    }
    get_total() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }
    get_taxes() {
        let taxes = 0;
        for (const item of this.items) {
            if (item instanceof TaxItem_1.default) {
                taxes += item.calculate_taxes();
            }
        }
        return taxes;
    }
    print_message(language) {
        if (language === "pt") {
            return `O total foi de R$${this.get_total()}, Obrigado pela compra`;
        }
        if (language === "en") {
            return `The total was R$${this.get_total()}, thanks for your buy`;
        }
    }
}
exports.default = Order;
