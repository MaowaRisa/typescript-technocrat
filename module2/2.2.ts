{
    // interface

    type User1 = {
        name: string;
        age: number;
    }
    // We can declare type with interface but for interface we create object 
    // There is a difference between these two we can declare type for primitive value with type alias but we can't do it with interface because its a object.
    type rollNumber = number;
    // If want we can create a new intersection type with extra property role
    type UserWithRole = User1 & { role : string}
    const newUser : UserWithRole = {
        name: 'Sheiam',
        age: 34,
        role: 'Teacher',
    }
// for Interface If want we can create a new intersection type with extra property role
// If I want to extends type its possible  Interface can extends type alias for a new one 
    interface userWithRole2 extends User2{
        role: string
    }
    const user3 : userWithRole2 = {
        name: 'Sheiam',
        age: 34,
        role: 'Teacher',
    }
    interface User2{
        name: string;
        age: number;
    }
    const user : User1 = {
        name: "Risa",
        age: 23
    }
    const user2 : User2 = {
        name: "Jimi",
        age: 12
    }


    // In Js - Array is Object and function is also an object 
    // for Array 
    // So we can declare interface for array and function too

    type Roll1 = number[];
    // Using Interface
    interface Roll2 {
        [index: number] : number
    }
    const rollNumber1 : Roll1 =  [1, 2, 3]
    const rollNumber2 : Roll2 =  [1, 2, 3]

    // For Function 
    type Add1 = (num1: number, num2: number) => number
    // Using interface
    interface Add2{
        (num1: number, num2: number) : number
    }

    const function1 : Add1 = (num1, num2) => num1 + num2
    const function2 : Add2 = (num1, num2) => num1 + num2
}