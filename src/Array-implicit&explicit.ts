// Implicit - TypeScript infers the type based on the assigned value

let numSample = [1,2,3];
let strSample = ["a","b","c"];
let boolSample = [true, false];


// Explicit - You explicitly declare the type of a variable, ensuring type safety

let numValue:number[] = [1,2,3];
let strValue:string[] = ["a","b","c"];
let boolValue:boolean[] = [true, false];


// Declare and Assign later

let numAssignInfer;
numAssignInfer = 3; 
console.log(numAssignInfer); 

let numAssignExplicit: number; 
numAssignExplicit = 3; 
console.log(numAssignExplicit); 

let numAssignArray: number[]; 
numAssignArray = []; // or let numAssignArray:number[] = []; 
numAssignArray.push(3);
console.log(numAssignArray)


// Readonly - Variables or properties marked as readonly cannot be reassigned, enforcing immutability

let numInit: readonly number[] = [1,2,3]
// numInit.push(5);