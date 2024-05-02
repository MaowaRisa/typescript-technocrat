{
    // Type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }
    const student1 : Student = {
        name: "Risa",
        age: 30,
        gender: "Female",
        contactNo: "02183273132",
        address: "Dhaka"
    }
    const student2 : Student= {
        name: "Mir",
        age: 35,
        gender: "Male",
        address: "Ctg"
    }

    // We can make it for any data  type
    type UserName = string;
    const userName : UserName = "Risa"

    type IsAdmin = boolean
    const isAdmin : IsAdmin = true

    // We can make type for function also as like Object 
    type Add = (para1: number, para2: number) => number
    const add : Add= (num1, num2) => num1 + num2


}