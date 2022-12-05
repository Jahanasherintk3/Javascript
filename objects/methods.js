let emp={id:1,name:"Ram",sal:35000}
console.log(emp)
// now we created an object//
console.log(emp.id)
console.log(emp.name)
console.log(emp.sal)
console.log(emp.email)
//we just read the object properties//
emp.name="Raj"
console.log(emp) //we changed the name//
emp.loc="Hydrabad"
console.log(emp) // we added another one//
delete emp.sal
console.log(emp) //we deleted one of the property//