let employees=[{id:1,name:"Raj",income:45000},
{id:2,name:"Ram",income:55000}]
function createEmployee(emp)
{
    employees.push(emp)
}
createEmployee({id:3,name:"priya",income:65000});
console.log(employees)