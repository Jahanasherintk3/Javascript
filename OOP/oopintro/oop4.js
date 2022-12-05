class Account
{
    min_Bal = 500;
    open_account() {
        console.log("account opened successfully")
    }
    deposit_account() {
        console.log("deposit successfully")
    }
    get_st() {
        console.log("printer is not working")
    }
    get_Bal() {
        console.log("balance...")
    }
    withdrawl_Amount() {
        console.log("insufficient Balance")
    }
    close_account() {
        console.log("close immediately")
    }
}
let a1 = new Account();
console.log(a1)

console.log(a1.min_Bal)
a1.open_account()
a1.deposit_account()
a1.get_st()
a1.get_Bal()
a1.withdrawl_Amount()
a1.close_account()
