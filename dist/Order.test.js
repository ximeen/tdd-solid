"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Agua_1 = __importDefault(require("./Agua"));
const Guarana_1 = __importDefault(require("./Guarana"));
const Order_1 = __importDefault(require("./Order"));
const Pizza_1 = __importDefault(require("./Pizza"));
const PizzaQueijo_1 = __importDefault(require("./PizzaQueijo"));
test("Deve criar um pedido e calcular o total", function () {
    const order = new Order_1.default();
    order.add_item(new Guarana_1.default("Guaraná", 8));
    order.add_item(new Pizza_1.default("Hut", 50));
    order.add_item(new PizzaQueijo_1.default("Hut", 55));
    order.add_item(new Agua_1.default("Crystal", 2));
    const total = order.get_total();
    expect(total).toBe(115);
});
test("Deve criar um pedido e calcular os impostos", function () {
    const order = new Order_1.default();
    order.add_item(new Guarana_1.default("Guaraná", 8));
    order.add_item(new Pizza_1.default("Hut", 50));
    order.add_item(new PizzaQueijo_1.default("Hut", 55));
    order.add_item(new Agua_1.default("Crystal", 2));
    const taxes = order.get_taxes();
    expect(taxes).toBe(16.8);
});
test("Deve criar um pedido e imprimir uma mensagem em portugues", function () {
    const order = new Order_1.default();
    order.add_item(new Guarana_1.default("Guaraná", 8));
    order.add_item(new Pizza_1.default("Hut", 50));
    order.add_item(new PizzaQueijo_1.default("Hut", 55));
    order.add_item(new Agua_1.default("Crystal", 2));
    const message = order.print_message("pt");
    expect(message).toBe("O total foi de R$115, Obrigado pela compra");
});
test("Deve criar um pedido e imprimir uma mensagem em ingles", function () {
    const order = new Order_1.default();
    order.add_item(new Guarana_1.default("Guaraná", 8));
    order.add_item(new Pizza_1.default("Hut", 50));
    order.add_item(new PizzaQueijo_1.default("Hut", 55));
    order.add_item(new Agua_1.default("Crystal", 2));
    const message = order.print_message("en");
    expect(message).toBe("The total was R$115, thanks for your buy");
});
