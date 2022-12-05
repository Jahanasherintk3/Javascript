class Account{
    min_Bal=500;
    get_Account_Details(){
        console.log("Account details")
    }
}
class Savings_Account extends Account{
        deposit_Amount(amount){
            console.log(this.min_Bal+amount)
        }
}
let a1=new Savings_Account();
a1.get_Account_Details()
console.log(a1)
a1.deposit_Amount(1500)


class Current_Account extends Account{
    min_Bal=10000
    deposit_Amount(amount){
        console.log(this.min_Bal+amount)
    }
}
let a2=new Current_Account()
console.log(a2)
a2.get_Account_Details()
a2.deposit_Amount(500000)