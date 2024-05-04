{
    // type guards in functional programming 

    // typeof --> type guard
    type AlphaNumeric = string | number;
    const add = (param1: AlphaNumeric, param2 : AlphaNumeric) : AlphaNumeric => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }else{
            return param1.toString() + param2.toString();
        }
    } 
    const res1 = add("2", "45")
    console.log(res1)

    // in guard
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: string;
    }
    const getUser = (user : NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }else{
            console.log(`My name is ${user.name} and I am a normal user`)
        }
    }
    const res2 = getUser({name: "Risa"})
    const res3 = getUser({name: "Mim", role: "Admin"})
    // other way
    const normalUser : NormalUser = {
        name: "Aayan"
    }
    const adminUser : AdminUser = {
        name: "Tanmoy",
        role: "Super Admin"
    }
    getUser(normalUser)
    getUser(adminUser)
    //
}