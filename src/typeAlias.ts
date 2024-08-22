// Primitive types

type userName = string;
type YesorNo = boolean;
type Age = number;

let userName:userName = "Äruna";
let isEng:YesorNo = false;
let age:Age = 30;

// Array
type NamesArray = string[];
let userNames:NamesArray = ['a', 'b']

//  Objects
type Users = {
    name: userName,
    age: Age,
    isEng: YesorNo,
}

let user:Users={name:'Devi', age:30, isEng:true}

// Union Type

type StrOrNums = string | number
let errorrCode:StrOrNums = '401';
errorrCode = 401;

// Tuples
type NameAndAge = [name:string, age:number]; 
let userTuple:NameAndAge  = ['Aswini', 30]