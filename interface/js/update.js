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

        document.querySelector('.btn-primary').addEventListener('click', updateEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function updateEmployee() {
    var id = document.getElementById('input-id').value;
    var name = document.getElementById('input-name').value;
    var surname = document.getElementById('input-surname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;

    axios.get({
        method: 'put',
        url: 'http://localhost:3000/user/update',
        data: {
            emp_id: id,
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