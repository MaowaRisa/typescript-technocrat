{
    // const rollNumbers : number[] = [3, 4, 5, 6];
    // const mentors : string[] = ['Mr X', 'Mr Y', 'Mrs Z'];
    // const boolArray : boolean[] = [true, false, true]
    
    // generic type
    // type GenericArray = Array<boolean>;

    // to create it generic type
    // const rollNumbers : Array<number> = [3, 4, 5, 6];
    // const mentors :  Array<string> = ['Mr X', 'Mr Y', 'Mrs Z'];
    // const boolArray :  GenericArray = [true, false, true];

    // for Dynamic
    // Want to make it dynamic like as function we can pass parameter and receive arguments
    // for industry practice we use "T" as parameter as its TYPE
    type GenericArray<T> = Array<T>

    const rollNumbers : GenericArray<number>  = [3, 4, 5, 6];
    const mentors :  GenericArray<string>  = ['Mr X', 'Mr Y', 'Mrs Z'];
    const boolArray :  GenericArray<boolean> = [true, false, true];

    const add = (x: number, y: number) => x + y
    add(20, 30);
    // Array of object 
    // if we give type <object> it will not check property types
    // if we want to check the property types then we need to specify
    const user: GenericArray<{name: string, age:number}> = [
        {
            name: 'Risa',
            age: 233
        },
        {
            name: 'Mezba',
            age: 330
        }
    ]

    // generic tuple
    type GenericTuple<X,Y> = [X, Y]
    const manush : GenericTuple<string, string>  = ['Mr x', 'Mr Y'];
    const userWithId : GenericTuple<number, {name: string, email: string, age:number}> = [1234, {name: 'risa', email: 'ris@mail.com', age: 12}] 

    // Using Generic Interface. We changed the above code with interface
    interface User{
        name: string;
        email: string;
        age: number
    }
    const userWithId2 : GenericTuple<number, User> = [1234, {name: 'risa', email: 'ris@mail.com', age: 12}] 

}