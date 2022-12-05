class Bank {
    get_Bank_Address() {
        console.log("Bank-get_Bank_Address")
    }
}
class Savings_Account extends Bank {
    //method overriding
    get_Account_Details() {
        console.log("Savings_Account - class get_Account_Details")
    }
}

let a1 = new Savings_Account()
a1.get_Account_Details()