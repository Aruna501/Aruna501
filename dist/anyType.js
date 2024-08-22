"use strict";
//  the any type is a special type that can hold any value, and it effectively disables type checking for the variable it is assigned to.
// mostly this is not use in project
// Basic types
let emp = "test";
emp = 30;
console.log(emp);
emp = "aruna";
console.log(emp);
emp = false;
console.log(emp);
// Array
let empValue = [];
empValue.push("Aruna");
empValue.push(20);
empValue.push(false);
console.log(empValue);
let empDetail;
empDetail = { employee: "Hema", age: 32 };
empDetail = { employee: 35, age: "32" };
console.log(empDetail);
// null and undefined
let x = null;
let y = undefined;
