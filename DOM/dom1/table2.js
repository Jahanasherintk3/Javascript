let students= [{ "id": 1, "first_name": "Donnajean", "last_name": "Semiraz", "email": "dsemiraz0@dyndns.org", "gender": "Female", "ip_address": "77.14.107.144" },
{ "id": 2, "first_name": "Lynnelle", "last_name": "Martinot", "email": "lmartinot1@hao123.com", "gender": "Female", "ip_address": "99.17.68.31" },
{ "id": 3, "first_name": "Ilario", "last_name": "Welband", "email": "iwelband2@photobucket.com", "gender": "Male", "ip_address": "117.150.15.151" },
{ "id": 4, "first_name": "Sheree", "last_name": "Hodgin", "email": "shodgin3@upenn.edu", "gender": "Polygender", "ip_address": "250.223.77.54" },
{ "id": 5, "first_name": "Randi", "last_name": "Bale", "email": "rbale4@gravatar.com", "gender": "Female", "ip_address": "255.39.1.76" },
{ "id": 6, "first_name": "Robbert", "last_name": "Cranmer", "email": "rcranmer5@bravesites.com", "gender": "Male", "ip_address": "156.243.127.179" },
{ "id": 7, "first_name": "Suzi", "last_name": "Kift", "email": "skift6@blogs.com", "gender": "Female", "ip_address": "151.171.176.40" },
{ "id": 8, "first_name": "Velvet", "last_name": "Piser", "email": "vpiser7@alibaba.com", "gender": "Female", "ip_address": "189.160.28.6" },
{ "id": 9, "first_name": "Kiley", "last_name": "Ellsworthe", "email": "kellsworthe8@bandcamp.com", "gender": "Female", "ip_address": "120.7.231.143" },
{ "id": 10, "first_name": "Bryan", "last_name": "Forsdike", "email": "bforsdike9@booking.com", "gender": "Male", "ip_address": "192.223.4.100" }]


function display_Data() {
    let rows=""
    for(stu of students)
    {
        rows=rows+`<tr>
                    <td>${stu.id}</td>
                    <td>${stu.first_name}</td>
                    <td>${stu.last_name}</td>
                    <td>${stu.email}</td>
                    <td>${stu.gender.substr(0,1)}</td>
                    </tr>`
    }
    document.getElementById("students").innerHTML = rows
}