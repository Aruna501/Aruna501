"use strict";
// Reusable code
const toArray = (x, y, z) => {
    return [x, y, z];
};
let arrs = toArray("1", "2", 3);
console.log(arrs);
// generics
// initially value is not assign, in the invoke the function assign the value
const toArrayGeneric = (x, y, z) => {
    return [x, y, z];
};
let genericArray = toArrayGeneric(1, 2, 3);
console.log(genericArray);
// multiple types
let printValue = (a, b, c) => {
    console.log(`a is ${typeof a} b is ${typeof b} c is ${typeof c}`);
};
printValue(1, "one", true);
// Type and generics together
let printValues = (a, b, c, d) => {
    console.log(`a is ${typeof a} b is ${typeof b} c is ${typeof c} d is ${d}`);
};
printValues(1, "one", true, 'Hello');
// Array Params
let printValuee = (array) => {
    console.log(array.join(','));
};
printValuee([true, false, false]);
let dict = { key: "one", value: 1 };
let dict1 = { key: "one", value: false };
let add1 = (x, y) => {
    return x + y;
};
let addString = (x, y) => {
    return x + y;
};
// class
class StatusCodes {
    constructor(code) {
        this.code = code;
    }
}
let StatusCodee = new StatusCodes('400');
// Generic constraints
class StatusCodess {
    constructor(code) {
        this.code = code;
    }
}
let StatusCoddee = new StatusCodess({ code: 400, id: 1 });
