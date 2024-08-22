// Reusable code

const toArray = (x:any, y:any, z:any) => {
    return [x,y,z]
}
let arrs = toArray("1","2",3)
console.log(arrs)

// generics
// initially value is not assign, in the invoke the function assign the value

const toArrayGeneric = <T>(x:T, y:T, z:T) => {
    return [x,y,z]
}

let genericArray = toArrayGeneric<number>(1,2,3)
console.log(genericArray)


// multiple types

let printValue = <X,Y,Z>(a:X, b:Y, c:Z) => {
    console.log(`a is ${typeof a} b is ${typeof b} c is ${typeof c}`)
}

printValue(1, "one", true)

// Type and generics together

let printValues = <X,Y,Z>(a:X, b:Y, c:Z, d:string) => {
    console.log(`a is ${typeof a} b is ${typeof b} c is ${typeof c} d is ${d}`)
}

printValues(1, "one", true, 'Hello')

// Array Params

let printValuee = <T>(array:T[]) => {
    console.log(array.join(','))
}
printValuee([true,false,false])


// Type

interface Dictionary <T,U>{
    key:T,
    value:U
}

let dict:Dictionary<string,number> = {key:"one", value:1}
let dict1:Dictionary<string,boolean> = {key:"one", value:false}

// Function Interface

interface Maths<T>{
    (x:T,y:T):T
}

let add1:Maths<number> = (x:number,y:number) => {
    return x+y
}
let addString:Maths<string> = (x:string,y:string) => {
    return x+y
}

// class

class StatusCodes<T>{
    code:T

    constructor(code:T){
        this.code = code
    }
    }

    let StatusCodee = new StatusCodes ('400')

    // Generic constraints

    class StatusCodess<T extends object>{
        code:T
    
        constructor(code:T){
            this.code = code
        }
        }
    
        let StatusCoddee = new StatusCodess ({code:400, id:1})
    