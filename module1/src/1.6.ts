// Learning function
// Normal Function 
// Arrow Function 

function add(num1 : number, num2: number) : number{
    return num1 + num2;
}
add(2, 2);

// Arrow Function 
const addArrow = (num1 : number, num2 : number) : number =>  num1 + num2;

// Object --> the methods belong to a object we called them methods 
// If we write a function inside an object we need to write the normal function.
const poorUser = {
    name : 'Maowa',
    balance: 0,
    addBalanace(balance: number) : string{
        return `My new balance is ${this.balance + balance}`
    }
}

const arr : number[] = [1, 3, 4, 5]

// Call back function 
const newArray = arr.map((elem : number) : number => elem * 2);

