import Agua from "./Agua";
import Guarana from "./Guarana";
import Order from "./Order";
import Pizza from "./Pizza";
import PizzaQueijo from "./PizzaQueijo";

test("Deve criar um pedido e calcular o total", function () {
  const order = new Order();

  order.add_item(new Guarana("Guaraná", 8));
  order.add_item(new Pizza("Hut", 50));
  order.add_item(new PizzaQueijo("Hut", 55));
  order.add_item(new Agua("Crystal", 2));

  const total = order.get_total();
  expect(total).toBe(115);
});

test("Deve criar um pedido e calcular os impostos", function () {
  const order = new Order();

  order.add_item(new Guarana("Guaraná", 8));
  order.add_item(new Pizza("Hut", 50));
  order.add_item(new PizzaQueijo("Hut", 55));
  order.add_item(new Agua("Crystal", 2));

  const taxes = order.get_taxes();
  expect(taxes).toBe(16.8);
});

test("Deve criar um pedido e imprimir uma mensagem em portugues", function () {
  const order = new Order();

  order.add_item(new Guarana("Guaraná", 8));
  order.add_item(new Pizza("Hut", 50));
  order.add_item(new PizzaQueijo("Hut", 55));
  order.add_item(new Agua("Crystal", 2));

  const message = order.print_message("pt");
  expect(message).toBe("O total foi de R$115, Obrigado pela compra");
});

test("Deve criar um pedido e imprimir uma mensagem em ingles", function () {
  const order = new Order();

  order.add_item(new Guarana("Guaraná", 8));
  order.add_item(new Pizza("Hut", 50));
  order.add_item(new PizzaQueijo("Hut", 55));
  order.add_item(new Agua("Crystal", 2));

  const message = order.print_message("en");
  expect(message).toBe("The total was R$115, thanks for your buy");
});
