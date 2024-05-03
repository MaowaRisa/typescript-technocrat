{
    // Function with Generics
    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const res1 = createArray('Bangladesh')
    // create array with generic one
    const res2 = createArrayWithGeneric<string>('Bangladesh')
    const res3 = createArrayWithGeneric<boolean>(true)
    // With Object 
    const resGenericObj = createArrayWithGeneric<{id:number; name: string}>({id:12, name:'risa'})
    // OR with interface
    interface User {id:number; name: string}
    const resGenericObj2 = createArrayWithGeneric<User>({id:12, name:'risa'})

    // Tuple
    const createTupleWithGeneric = <T, Q>(param1: T, param2: Q) : [T, Q] => {
        return [param1, param2];
    }
    const tup1 = createTupleWithGeneric<string, number>('Bangladesh', 100)
    const tup2 = createTupleWithGeneric<string, string>('Bangladesh', 'Asia')
    const tup3 = createTupleWithGeneric<string, {id: number, name: string}>('Bangladesh', {id: 12, name: 'Asia'})
    // With Interface
    interface Continent{
        id: number;
        name: string;
    }
    const tup4 = createTupleWithGeneric<string, Continent>('Bangladesh', {id: 12, name: 'Asia'})
    const addCourseToStudent = <T>(student: T) =>{
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({name: 'Mr X', email: 'x@mail.com', devType:'NLWD'})
    const student2 = addCourseToStudent({name: 'Mr X', email: 'x@mail.com', hasWatch:'Apple'})

}