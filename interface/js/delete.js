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

        document.querySelector('.btn-primary').addEventListener('click', deleteEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function deleteEmployee() {
    var id = document.getElementById('input-id').value;

    axios.get({
        method: 'delete',
        url: 'http://localhost:3000/user/delete',
        data: {
            emp_id: id
        }
    }).then(function(res) {
        console.log(res);
    }).catch(function(err) {
        console.log(err);
    })
}