import Item from "./Item";

export default abstract class TaxItem extends Item {
  calculate_taxes() {
    return (this.price * this.get_taxes()) / 100;
  }
  abstract get_taxes(): number;
}
