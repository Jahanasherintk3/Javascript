let car={number:2341,name:"benz",ordernumber:4563,branch:"kochi"}
console.log(car.number)
console.log(car.name)
console.log(car.ordernumber)
console.log(car.branch)
//we just printed the items//
car.name="audi"
car.branch="calicut"
car.number=1235
console.log(car)
// we changed the items//
car.prize=4000000;
console.log(car) //added//
delete car.ordernumber
console.log(car)
