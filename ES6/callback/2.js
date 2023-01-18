let emp = [{ id: 11, name: "Ram", sal: 30000 },
{ id: 12, name: "Raj", sal: 40000 }]

let createEmp = (emp, callback) => {
    setTimeout(() => {
        emp.push(emp)
        callback()
    }, 3000);
}

let getEmp = (() => {
    setTimeout(() => {
        let rows = ""
        emp.forEach((emp) => {
            rows += `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.sal}</td>
        </tr>`
        })
        document.getElementById('data').innerHTML = rows
    }, 1000);
}
createEmp({ id: 13, name: "Ras", sal: 50000 }, getEmp);

