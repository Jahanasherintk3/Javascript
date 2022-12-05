class Account {
    min_Bal = 1000;
    amount;
    open_Account() 
    {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(money) 
    {
        this.amount = money
    }
    get_Bal()
    {
        return this.min_Bal + this.amount
    }
}

let a1 = new Account();
a1.open_Account();
a1.deposit_Amount(1500);
console.log(a1.get_Bal())

console.log("*******Second Object************")

let a2 = new Account();
a2.open_Account()
a2.deposit_Amount(15000);
console.log(a2.get_Bal())