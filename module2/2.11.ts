{
    // Utility Types
    //Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    } 
    // If we want a specific property then we use Pick
    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">
    // type Any = Pick<Person, keyof Person>
    // If you want to Omit or don't want the mention property
    type ContactInfo = Omit<Person, "name" | "age">

    // if you want to make all the property required
    type PersonRequired = Required<Person>
    // Partial means all property optional
    type PersonPartial = Partial<Person>
    // If Want to make Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Mr X",
        age: 200,
        contactNo: '018237412'
    }
    // person1.name = "Mr yZ"

    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }
    // If I want to add more object properties then need to use record
    // need to remember object's keys are string
    type MyObj = Record<string, string>
    const EmtyObj : Record<string, unknown> = {}
    const obj1 : MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }
    //
}