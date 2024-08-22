// syntax - convert one type to anothertype
// as or <>


// unknown string to string
let xs:unknown = 'Hello';
console.log((xs as string).length)
console.log((<string>xs).length)

// unknow number to string

let ys:unknown = 20
console.log((ys as string).length)

// DOM
let input = document.querySelector('inut') as HTMLInputElement
let inputValue = input.value
