{
    // Statics in OOP -  want to reference same memory
    class Counter{
        static count: number = 0; // static 
        static increment(){
           return Counter.count += 1;
        }
        static decrement(){
            return Counter.count -= 1;
        }
    }
    const instance1 = new Counter();
    // console.log(instance1.increment()); // different memory
    // console.log(instance1.increment()); // changing from the single source
    // console.log(instance1.increment()); // 

    // const instance2 = new Counter();
    // console.log(instance2.increment()); // different memory

    // when you make the methods static then we need to call them using class name
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.decrement())
}