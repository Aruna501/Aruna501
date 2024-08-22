"use strict";
// redeclare the value
// you cant add the new fields
// Implicit
let employee = {
    name: "Swetha",
    age: 25,
    isPermanent: true
};
employee.age = 28;
employee = {
    name: "Aswini",
    age: 22,
    isPermanent: false
};
console.log(employee);
let employees = {
    // or
    // let employees:{name:string, age:number, isPermanent:boolean} = {   
    name: "Swetha",
    age: 25,
    isPermanent: true
};
let employeeData = {
    // or
    // let employees:{name:string, age:number, isPermanent:boolean} = {   
    name: "Swetha",
    // age: 25,
    isPermanent: true
};
