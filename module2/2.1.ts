{
    //
    // type assertion 
     let anything : any;
     
     anything = "Next Level";
    //  (anything as string). 
    anything = 22;
    //  (anything as number).  // When we sure about the type this process is type assertion 

    const kgToGm = (value: string | number): number | string | undefined=> {
        if(typeof value === 'string'){
            const convertedValue = parseInt(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }
        if (typeof value === 'number'){
            return value * 1000;
        }
    }

    const res1 = kgToGm(1000) as number; // when we sure that it will return the number we can use type assertion 
    // Pay extra attention when use type assertion.
    const res2 = kgToGm('12') as string;

    type CustomError = {
        message: string
    }

    try{

    }catch(error){
        console.log((error as CustomError).message)
    }

    //
}