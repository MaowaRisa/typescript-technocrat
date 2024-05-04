{
    // Inheritance 
    class Person{
        constructor(public name:string, public age:number, public address:string){

        }
        getSleep(numOfHours : number){
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }
    class Student extends Person{
        constructor(public name:string, public age:number, public address:string){
            super(name, age, address)
        }
        getSleep(numOfHours : number){
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }
    class Teacher extends Person{
        constructor(public name:string, public age:number, public address:string, public designation: string){
            super(name, age, address)
        }
        getSleep(numOfHours : number){
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
        takeClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass} class/classes`)
        }
    }
    const student1 = new Student("Mrs Risa", 20, "Sydney")
    const teacher1 = new Teacher("Mrs Risa", 20, "Sydney", "professor")
 
}