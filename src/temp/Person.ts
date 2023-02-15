export default class Person {
  age: number;
  constructor() {
    this.age = 0;
  }

  set_age(age: number) {
    if (age < 0) throw new Error("Idade tem que ser maior que zero");
    this.age = age;
  }
}
