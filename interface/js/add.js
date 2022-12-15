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

        document.querySelector('.btn-primary').addEventListener('click', addEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function addEmployee() {
    var name = document.getElementById('input-name').value;
    var surname = document.getElementById('input-surname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;

    axios.get({
        method: 'post',
        url: 'http://localhost:3000/user/add',
        data: {
            emp_name: name,
            emp_surnames: surname,
            emp_phone: phone,
            emp_mail: mail, 
            emp_address: address
        }
    }).then(function(res) {
        console.log(res);
    }).catch(function(err) {
        console.log(err);
    })
}