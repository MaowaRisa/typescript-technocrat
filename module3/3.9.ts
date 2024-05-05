{
    // abstraction  - 1. interface , 2. abstract class
    // idea
    interface Vehicle {
        startEngine() :void;
        stopEngine() : void;
        move() : void;
    }
    // const vehicle1 : Vehicle = {
    //     name: 'Toyota',
    //     model: 2023
    // }

    // real implements 
    class Car implements Vehicle{
        startEngine(): void {
            console.log("I am starting the car engine")
        }
        stopEngine(): void {
            console.log("I am stooping the car engine")
        }
        move(): void{
            console.log("I am moving te car");
        }
        test(){
            console.log("This is a test drive")
        }
    }
    const toyotaCar = new Car();
    toyotaCar.startEngine()
    // Abstract class
    abstract class Car2{
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test(){
            console.log("I am test method")
        }
    }
    // const hondaCar = new Car2(); // can create instance from the abstract class

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log('Stating the car.')
        }
        stopEngine(): void {
            console.log('Stopping the car.')
        }
        move(): void {
            console.log('Moving the car.')
        }
    }
}