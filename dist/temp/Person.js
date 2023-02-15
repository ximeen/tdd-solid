"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor() {
        this.age = 0;
    }
    set_age(age) {
        if (age < 0)
            throw new Error("Idade tem que ser maior que zero");
        this.age = age;
    }
}
exports.default = Person;
