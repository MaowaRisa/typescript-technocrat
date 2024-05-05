{
    // type guard using - instance Of
    class Animal{
        constructor(public name: string, public species: string){

        }
        makeSound(){
            console.log("I am making sound")
        }
    }  

    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeBark(){
            console.log("I am barking");
        }
    }
    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeMeaw(){
            console.log("I am Meawing")
        }
    }

    const dog = new Dog('Dog Bhai', "Dog");
    const cat = new Cat("Cat Bhai", "Cat");

    // const getAnimal = (animal : Animal)=>{
    //     if(animal instanceof Dog){
    //         animal.makeBark()
    //     }else if(animal instanceof Cat){
    //         animal.makeMeaw();
    //     }else{
    //         animal.makeSound();
    //     }
    // }
    // getAnimal(dog);
    // getAnimal(cat);

    class Horse extends Animal{
        constructor(name:string, species: string){
            super(name, species)
        }
    }
    const horse = new Horse( "Horse", "Horse")
    // getAnimal(horse);

    // We Use function to handle smartly this "instance of checking"
    const isDog = (animal : Animal) : animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat;
    }
    const getAnimal = (animal : Animal)=>{
        if(isDog(animal)){
            animal.makeBark()
        }else if(isCat(animal)){
            animal.makeMeaw();
        }else{
            animal.makeSound();
        }
    }
    getAnimal(dog);
    getAnimal(cat);
    getAnimal(horse);

}