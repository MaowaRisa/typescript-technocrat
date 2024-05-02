{
    // Nullable types 
    const searchName = (value: string | null) => {
        if(value){
            console.log("Searching");
        }else{
            console.log("There is nothing to search")
        }
    }
    searchName(null);

    // unknown type - - when the argument type is unknown to us
    const getSpeedInMeterPerSecond = (value:unknown) =>{
        if( typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is  ${convertedSpeed} ms^-1`)
        }
        if( typeof value === 'string'){
            const [valueInNumber, unit] = value.split(' ');
            const convertedSpeed = (Number(valueInNumber) * 1000) / 3600;
            console.log(convertedSpeed)
        }else{
            console.log('wrong input')
        }
    }
    getSpeedInMeterPerSecond('2000 kmh^-1')

    // never- when we sure about some function they will not return anything then we can set the return type as never
    const throwError = (msg: string) : never =>{
        throw new Error(msg)
    }
}