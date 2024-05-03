{
    // Conditional types - if one type is depend on another type its conditional type

    type a1 = number
    type b1 = undefined

    type x = a1 extends null ? true : false // so x is conditional type
    // nested condition 
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any
    type sheikh = 
    {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }
    // check vehicle 
    // keyof Sheikh it will create -- "bike" | "car" | "ship"
    type CheckVehicle<T> =  T extends keyof sheikh ? true : false
    type hasShip= CheckVehicle<"ship">
    type hasTractor = CheckVehicle<"tractor">
}