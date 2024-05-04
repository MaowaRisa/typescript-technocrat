{
    // Object Oriented Programming Language
    // Class
    class Animal{

        // Parameter Properties - set the public keyword for contractor parameters will define and initialize the properties
        constructor(public name: string, public species: string, public sound:string){ 
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }
    const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
    const cat = new Animal('Persian', "cat","Meaw Meaw");

    cat.makeSound();
    dog.makeSound()

}