{
    //constrains - enforce
    // If want some property must be passed then we use constrains like studnet must enter ID, Name and email 

    // const addCourseToStudent = <T extends {id: number; name:string; email: string;} >(student: T) =>{
    //     const course = "Next Level Web Development"
    //     return {
    //         ...student,
    //         course
    //     }
    // }
    interface Student {
        id: number;
        name: string;
        email: string;
    }
    const addCourseToStudent = <T extends Student>(student: T) =>{
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent<Student & {devType:string}>({
        id: 12,
        name: 'Mr X', 
        email: 'x@mail.com', 
        devType:'NLWD'
    });
    const student2 = addCourseToStudent({
        id: 13,
        name: 'Mr Y', 
        email: 'y@mail.com', 
        hasWatch:'Apple'
    });
    // const student3 = addCourseToStudent({emni : 'emni'}) // it should not be like this 
    const student3 = addCourseToStudent({id: 44, name:'Risa', email:'ris@mail.com', emni : 'emni'}) // it should not be like this 
}