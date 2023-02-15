import TaxItem from "./TaxItem";

export default class Pizza extends TaxItem {
  constructor(description: string, price: number) {
    super("Pizza", description, price);
  }
  get_taxes(): number {
    return 10;
  }
}
