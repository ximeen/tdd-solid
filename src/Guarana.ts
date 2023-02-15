import TaxItem from "./TaxItem";

export default class Guarana extends TaxItem {
  constructor(description: string, price: number) {
    super("Gurana", description, price);
  }

  get_taxes(): number {
    return 10;
  }
}
