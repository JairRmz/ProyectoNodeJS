const empleados = require("../../routes/empleados");

window.onload = init;
var headers = {};
var url = "http://localhost:3000/employees"

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = "empleados.html"
        } );

        document.querySelector('.btn-primary').addEventListener('click', loadEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function loadEmployee() {
    axios.get(url + "/getall", headers).then(function(res) {
        console.log(res);
        displayEmployee(res.data.message)
    }).catch(function(err) {
        console.log(err);
    })
}

function displayEmployee(employee) {
    var body = document.querySelector("body");
    for (var i = 0; i < employee.length; i++) {
        body.innerHTML += `<h3>${employee[i].emp_id}: ${employee[i].emp_name} ${employee[i].emp_surname}</h3>`;
    }
}