//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function validar()
{
    var validarusr = document.getElementById("Usuario").value
    var validarpasw = document.getElementById("clave").value
    if (validarusr == "" || validarpasw == ""){
    alert("Debes llenar ambos campos")
    }
    else
    { 
    return window.location.href = "home.html";
}}




