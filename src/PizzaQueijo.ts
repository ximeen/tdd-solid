import TaxItem from "./TaxItem";

export default class PizzaQueijo extends TaxItem {
  constructor(description: string, price: number) {
    super("PizzaQueijo", description, price);
  }
  get_taxes(): number {
    return 20;
  }
}
