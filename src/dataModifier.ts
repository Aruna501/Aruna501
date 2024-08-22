// Public, Protected, Private, readonly

// default value is public
// protected assign class and subclass only
// private is using the within the class only


class Person1 {
//   private  name:string
//   protected  name:string
name:string

    constructor(name:string){
        this.name = name
    }
}

class Employee2 extends Person1 {
    print = () => {
        console.log(this.name)
    }

    changeName = (name:string) => {
        this.name = name
    }
}

let empObject = new Employee2('John')
empObject.print()

empObject.changeName('Test')
empObject.print()

empObject.name = 'Testing'
empObject.print()
