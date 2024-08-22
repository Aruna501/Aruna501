// only execute with object in the interface

interface Userr {
    name:string,
    age:number
}

const user1:Userr = {
    name: 'Test',
    age: 40
}

// function interface

interface Function{
    (x:number, y:number): number
}
let addss:Function = (p1:number, p2:number) => {
    return p1+p2
}

// Extending interfaces

interface Employee1 extends User {
employeeId:number
}

const employeee:Employee1 = {
name:'John',
age:30,
employeeId: 12,
}

// type cant be replaced with

// interface StrorNum = string | number
// let errorCodess:StrorNum = '401'

// errorCodess = 401

