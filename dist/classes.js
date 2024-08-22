"use strict";
// simple class
class User2 {
    constructor(x) {
        this.id = x;
    }
}
let userObject = new User2(10);
console.log(userObject.id);
// class implements interface ["implemets" is a key of classinterface]
// implements mutile interface
class Person {
    constructor(id, name, city) {
        this.getName = () => {
            return this.city;
        };
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
let person = new Person(100, 'Hema', 'chennai');
console.log(person.name);
console.log(person.getName());
// extends - key is "extends"
// implements one interface only, its not possible multiple interface implements
class Student extends Person {
    constructor() {
        super(...arguments);
        this.studentId = 100;
    }
    print() {
        console.log(`name is ${this.name} and id is ${this.studentId}`);
    }
}
let student = new Student(100, "testing", "chennai");
student.print();
