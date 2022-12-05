let students=[{id:1,name: "Raj", email: "raj@gmail.com" },
{ id:2, name: "Soni", email: "soni@gmail.com" },
{ id:3, name: "Priya", email: "priya@gmail.com" },
{ id:4, name: "Miya", email: "Miya@gmail.com" }]
function table(){
    let rows = "";
    students.forEach((students) => {
        rows = rows + `<tr>
                        <td>${students.id}</td>
                        <td>${students.name}</td>
                        <td>${students.email}</td>
                    </tr>`
    })
    document.getElementById('tbody_Data').innerHTML = rows
}
