{
    // Access Modifiers
    class BankAccount{
        readonly id: number;
        public name: string;
        // private _balance: number; // you can modify the value only within the class not from outside.
        // If you want to use the variable in child class that extends this class you need to make it protected
        protected _balance: number

        constructor(id: number, name:string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount:number){
            this._balance = this._balance + amount;
        }
        getBalance(){
            return this._balance;
        }
    }
    // class StudentAccount extends BankAccount{
    //     test(){
    //         this._balance // when this variable is protected you can get it in child class
    //     }
    // }
    const poorPersonAccount = new BankAccount(111, "Mrs Risa", 20);
    poorPersonAccount.addDeposit(50);
    const myBalance = poorPersonAccount.getBalance();
    console.log(myBalance);
    //
}