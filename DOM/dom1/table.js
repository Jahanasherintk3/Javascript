let students=[
    
    {id:1,name:"Ram",rollnumber:22},
    {id:2,name:"Raj",rollnumber:24},
    {id:3,name:"Umi",rollnumber:26}
]
function get_Data()
{   
    let rows=""
    for(stu of students)
    {
    rows=rows+`<tr>
                <td>${stu.id}</td>
                <td>${stu.name}</td>
                <td>${stu.rollnumber}</td>
                <tr>`
    }
    document.getElementById("details").innerHTML=rows
}