import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
  items: Item[];

  constructor() {
    this.items = [];
  }

  add_item(item: Item) {
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
      if (item instanceof TaxItem) {
        taxes += item.calculate_taxes();
      }
    }

    return taxes;
  }

  print_message(language: string) {
    if (language === "pt") {
      return `O total foi de R$${this.get_total()}, Obrigado pela compra`;
    }

    if (language === "en") {
      return `The total was R$${this.get_total()}, thanks for your buy`;
    }
  }
}
