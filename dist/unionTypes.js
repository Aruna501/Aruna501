"use strict";
// 1) In TypeScript, Union Types allow a variable to be assigned one of several types. This is useful when a value can be more than one type, and it helps to enforce type safety while providing flexibility.
// 2) The syntax for union types involves using the pipe (|) symbol between the types.
// Implicit or inference
let unionArray = ['one', 3, true];
unionArray.push("Zero");
unionArray.push(5);
unionArray.push(false);
console.log(unionArray);
// Explicit
let errorCode;
errorCode = "401";
errorCode = 400;
// explicit Array
let errorCodes = [];
errorCodes.push("aruna");
errorCodes.push(400);
errorCodes.push(true);
console.log(errorCodes);
