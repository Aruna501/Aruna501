"use strict";
// Public, Protected, Private, readonly
// default value is public
// protected assign class and subclass only
// private is using the within the class only
class Person1 {
    constructor(name) {
        this.name = name;
    }
}
class Employee2 extends Person1 {
    constructor() {
        super(...arguments);
        this.print = () => {
            console.log(this.name);
        };
        this.changeName = (name) => {
            this.name = name;
        };
    }
}
let empObject = new Employee2('John');
empObject.print();
empObject.changeName('Test');
empObject.print();
empObject.name = 'Testing';
empObject.print();
