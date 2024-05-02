{
    // Spread operator : normally spread operator creates a copy of the array or object in different memory
    const sisters1: string[] = ['Janu','Risa', 'Ritu', 'Jabin'];
    const sisters2: string[] = ['Tonny','Bonny', 'Situ', 'Bithi'];

    // Error: 
    // sisters1.push(sisters2); // not possible because we are trying to insert array to sister1. Only string value we can add.
    sisters1.push(...sisters2);

    const mentors1 = {
        typeScript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'nahid'
    }
    const mentorList = {
        ...mentors1,
        ...mentors2
    }
    // Rest Operator :  normally it is used for passing lots of arguments to a function 
    const greetFriends = (...friends: string[])=>{
        friends.forEach((friend : string) => console.log(`Hi ${friend}`))
    }
    greetFriends("Risa", "Tisaa", "Misa", "Bisa")
    
}