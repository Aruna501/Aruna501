// abstract class - incomplete class

abstract class Persons{
abstract name: string

    // constructor(name:string){
    //     this.name = name
    // }

    abstract print():void
}

// child class

class Student1 extends Persons {
    name: string

    constructor(x:string){
        super()
            this.name = x
        }

    print = () => {
    console.log(this.name)    
    }
}

let studentObject = new Student1 ('john')

// Abstract vs Interface

// interfaces are purely a TypeScript feature and do not exist in the compiled JavaScript.

interface AddressInterface {
    city:string
}