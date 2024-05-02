{
    // ternary Operator 
    const age : number = 15

    if (age <15){
        console.log('adult')
    }else{
        console.log('not adult')
    }
    const isAdult = age >=18 ? 'Adult' : 'Not Adult'
    console.log(isAdult)
    // Optional Operator
    // Nullish coalescing - if you need to make any decision depends on null / undefined 

    const isAuthenticated = null; // it will work same for null or undefined in null coalescing and ternary but for  "" empty string null coalescing will return "" empty string but ternary will not. ternary will return Guest
    const result1 = isAuthenticated ?? "Guest"
    const result2 = isAuthenticated ? isAuthenticated : "Guest"

    console.log({result1}, {result2})

    type User = {
        name: string;
        address:{
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;  // optional chaining
        }
    }
    const user : User = {
        name: "Risa",
        address: {
            city: "Dhaka",
            road: "My Road",
            presentAddress: "Dhaka Town"
        }
    }
    const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address';
    console.log(permanentAddress)

}