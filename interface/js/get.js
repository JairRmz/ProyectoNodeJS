const empleados = require("../../routes/empleados");

window.onload = init;

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

        document.querySelector('.btn-primary').addEventListener('click', getEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function getEmployee() {
    var name = document.getElementById('input-name').value;

    axios.get({
        method: 'get',
        url: 'http://localhost:3000/user/get',
        data: {
            emp_name: name
        }
    }).then(function(res) {
        console.log(res);
        displayEmployee(res.data.message)
    }).catch(function(err) {
        console.log(err);
    })
}

function displayEmployee(employee) {
    var body = document.querySelector("body");
    for (var i = 0; i < employee.length; i++) {
        body.innerHTML += `<h3>${employee[i].emp_name}</h3>`;
    }
}