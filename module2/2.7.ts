{
    // generic constraints with keyof operator 
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }
    type Owner = "bike" | "car" | "ship"; 
    const person1 : Owner = 'bike'; 

    type Owner2 = keyof Vehicle;
    const person2 : Owner2 = "car"


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key:Y) =>{
        return obj[key];
    }
    // With Object 
    const user = {
        name: 'Mr X',
        age:26,
        address: 'ctg'
    }
    const res1 = getPropertyValue(user, 'name')

    const car = {
        model: 'Toyota',
        year: 2022
    }
    const res2 = getPropertyValue(car, 'model')
    // user['name']
    
}