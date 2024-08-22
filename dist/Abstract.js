"use strict";
// abstract class - incomplete class
class Persons {
}
// child class
class Student1 extends Persons {
    constructor(x) {
        super();
        this.print = () => {
            console.log(this.name);
        };
        this.name = x;
    }
}
let studentObject = new Student1('john');
