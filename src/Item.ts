export default abstract class Item {
  category: string;
  brand: string;
  price: number;

  constructor(category: string, brand: string, price: number) {
    this.category = category;
    this.brand = brand;
    this.price = price;
  }
}
