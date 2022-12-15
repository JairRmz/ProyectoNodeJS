const empleados = require("../../routes/empleados");

window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-add').addEventListener('click', function() {
            window.location.href = "add.html"
        } );

        document.querySelector('.btn-update').addEventListener('click', function() {
            window.location.href = "update.html"
        } );

        document.querySelector('.btn-delete').addEventListener('click', function() {
            window.location.href = "delete.html"
        } );

        document.querySelector('.btn-find').addEventListener('click', function() {
            window.location.href = "get.html"
        } );

        document.querySelector('.btn-all').addEventListener('click', function() {
            window.location.href = "getall.html"
        } );
    } else {
        window.location.href = "index.html";
    }
}