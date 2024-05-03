{
    //Asynchronous JS
    // Promise
    type ToDo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }
    const getToDo = async(): Promise<ToDo> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        // console.log(data)
        return data

    }
    getToDo();
    // type
    type Something = {something: string}
    const createPromise = () : Promise<Something> =>{
        return new Promise<Something>((resolve, reject) =>{
            const data: Something = 'something';

            if(data){
                resolve(data)
            }else{
                reject('failed to load data')
            }
        })
    }
    // Calling create promise function
    const showData = async(): Promise<Something> =>{
        const data: Something = await createPromise()
        return data
        // console.log(data)
    }
    showData()
    //
}