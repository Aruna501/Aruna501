let username: string = "Alice";
let agee: number = 30;
 
function greeting(person: { name: string; age: number }): void {
	console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
 
greeting({ name: "Bob", age: 25 });
