let emp = [{ id: 11, name: "Raj", sal: 30000 },
{ id: 12, name: "Ram", sal: 40000 },
{ id: 13, name: "Raz", sal: 50000 }]

let createEmp = (empl) => {
    return new Promise((solved, reject) => {
        let flag = true;
        setTimeout(() => {
             emp.push(empl);
        true? resolve("inserted"):reject("not inserted")},3000);
});
}
let getEmp = () => {
    setTimeout(()=>{
            let rows=""
            emp.forEach(()=>{
                rows =rows+ `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.sal}</td>
                </tr>`
                })
                document.getElementById("data").innerHTML="rows"
            },1000)
    }
createEmp({ id: 55, name: "Soni", sal: 120000 })
    .then((msg)=>{
        console.log(msg)
        getEmp()
    })
    .catch((err)=>{
        console.log(err)
    })