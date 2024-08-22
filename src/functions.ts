// function type
let greet: Function;

// greet = () => {    or
let greets = () => {
    return "Hello"
}

// Function with Parameters

let add = (a:number, b:number) => {
    return a+b ;
}
console.log(add(10,10))

// Function with returnType

let addition = (a:number, b:number):number => {
    return a+b ;
}
console.log(addition(10,10))

// function with union Type params

let additions = (a:number, b:number, c:(string | number)):number => {
    if(typeof c === "number"){
    return a+b+c ;
    }
    return a+b ;
}
console.log(additions(10,10,"10"))

// function wtih optional params

let adds = (a:number, b:number, c?:(string | number)):number => {
    if(typeof c === "number"){
    return a+b+c ;
    }
    console.log(c)
    return a+b ;
}
console.log(adds(10,10))

// function with default value

let addValue = (a:number, b:number, c:(string | number)=10):number => {
    if(typeof c === "number"){
    return a+b+c ;
    }
    console.log(c)
    return a+b ;
}
console.log(addValue(10,10))

// function with type alias params

type StrOrNum = string | number;

let addVal = (a:number, b:number, c:StrOrNum = 10):number => {
    if(typeof c === "number"){
    return a+b+c ;
    }
    console.log(c)
    return a+b ;
}
console.log(addVal(10,10))

// function with type alias params in object

type User={
    name:string, age:number  
}

// let printObject = (user:{name:string, age:number}) => {   or
let printObject = (user:User) => {
    console.log(`Name is ${user.name} and age is ${user.age}`)
}

printObject({name:"Hasim", age:20})

// rest params


let addVals = (a:number, b:number, ...c:number[]):number => {
    
    console.log(c)
    let d=c.reduce((x,y)=>x+y,0)
    return a+b+d ;
}
console.log(addVals(10,10, 5,4,6,8))


// Function signature

// 1) function and type name is using the same
// 2) if change the params names didn't show the error

let addValss: (a:number, b:number, ...c:number[])=>number; //return type not mandatory is provid "void"

addValss = (a:number, b:number, ...c:number[]):number => {
    
    console.log(c)
    let d=c.reduce((x,y)=>x+y,0)
    return a+b+d ;
}
console.log(addValss(10,10, 5,4,6,8))
