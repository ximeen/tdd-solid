import Item from "./Item";

export default class Agua extends Item {
  constructor(description: string, price: number) {
    super("Agua", description, price);
  }
  get_taxes(): number {
    throw new Error("Agua é isenta de impostos");
  }
}
