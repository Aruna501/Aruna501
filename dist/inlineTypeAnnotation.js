"use strict";
let username = "Alice";
let agee = 30;
function greeting(person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
greeting({ name: "Bob", age: 25 });
