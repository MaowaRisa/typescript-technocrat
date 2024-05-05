{
    // Getter and Setter 
    {
        // 
        class BankAccount{
            readonly id: number;
            public name: string;
            protected _balance: number
    
            constructor(id: number, name:string, balance: number){
                this.id = id;
                this.name = name;
                this._balance = balance;
            }
            // addDeposit(amount:number){
            //     this._balance = this._balance + amount;
            // }
            // setter 
            set deposit(amount: number){
                this._balance += amount;
            }
            // getter 
            get Balance(){
                return this._balance;
            }
            // getBalance(){
            //     return this._balance;
            // }
        }
    
        const poorPersonAccount = new BankAccount(111, "Mrs Risa", 20);
        // poorPersonAccount.addDeposit(50); // we need to call the function 
        // const myBalance = poorPersonAccount.getBalance();
        // set deposit
        poorPersonAccount.deposit = 500;
        const myBalance = poorPersonAccount.Balance // now we are getting the balance like property
        console.log(myBalance);
        //
    }
}