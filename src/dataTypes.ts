let a:number = 8; // number
console.log(a)

let b:string = "Welcome"; //string
let c: boolean = true; //boolean
let arr: string[] = ["one", "two", "three"]; //array
let tuple: [string, number] = ["TypeScript", 2024]; //tuple
interface people {
	name: string;
	age: number;
}

let obj: people = {
	name: "John",
age: 23

}; // interface and objects

    let multiply = (num:number) => {
        return 10 * num
    } // function


console.log(multiply(5))