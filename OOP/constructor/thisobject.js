class Account
{
 constructor(id,name,amount)
 {
    this.Id=id;
    this.Name=name;
    this.amount=amount 
 }
 get_Account_Bal()
 {
    return this.acc_Account;
 }
}
let a1=new Account(1,"Ram",1500)
console.log(a1)
console.log(a1.get_Account_Bal())

let a2=new Account(2,"Raj",1300)
console.log(a2)
console.log(a2.get_Account_Bal())
