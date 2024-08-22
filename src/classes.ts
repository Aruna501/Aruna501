// simple class

class User2 {
// id:number = 10 or

id:number
constructor(x:number){
    this.id = x
}
}

let userObject = new User2(10)
console.log(userObject.id)

// Interface

interface PersonInterface{
    id:number,
    name:string
}

interface AddressInterface {
    city:string
}

// class implements interface ["implemets" is a key of classinterface]
// implements mutile interface

class Person implements PersonInterface{
    id:number
    name:string
    city:string
    constructor(id:number, name:string, city:string)
    {
        this.id = id
    this.name = name
    this.city = city
    }
    getName = () => {
        return this.city
    }
}

let person = new Person(100, 'Hema', 'chennai')
console.log(person.name)
console.log(person.getName())

// extends - key is "extends"
// implements one interface only, its not possible multiple interface implements

class Student extends Person {
studentId:number = 100
print() {
    console.log(`name is ${this.name} and id is ${this.studentId}`)
}
}

let student = new Student (100, "testing", "chennai")
student.print();