let datosActuales = JSON;


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
mostrarSpan();
document.querySelector("#btnGuardarDatosUser").addEventListener("click",guardarDatos);
});


function mostrarSpan()
{
if(localStorage.getItem("perfil") !== null )
{
datosActuales.nombre = document.querySelector("#txtNombre").value
datosActuales.edad = document.querySelector("#txtEdad").value; 
datosActuales.telefono = document.querySelector("#txtTel").value; 
datosActuales.email = document.querySelector("#txtEmail").value; 
document.querySelector("#spanNombre").innerHTML = datosActuales.nombre;
document.querySelector("#spanEdad").innerHTML = datosActuales.edad; 
document.querySelector("#spanTel").innerHTML = datosActuales.telefono; 
document.querySelector("#spanEmail").innerHTML = datosActuales.email; 
}
}

function guardarDatos()
{
    if(localStorage.length !== 0)
    {
    localStorage.removeItem('perfil');
    }

    let nombre = document.querySelector("#txtNombre").value; 
    let edad = document.querySelector("#txtEdad").value; 
    let telefono = document.querySelector("#txtTel").value; 
    let email = document.querySelector("#txtEmail").value; 
    let objDatos = JSON.stringify({"nombre":nombre,"edad":edad,"telefono":telefono,"email":email});
    localStorage.setItem('perfil', objDatos);
    let datosUser = localStorage.getItem('perfil');
    let objDatosJSON = JSON.parse(datosUser);
    datosActuales = objDatosJSON;
    mostrarSpan();
}




document.querySelector("#borrar").addEventListener("click",borrar);

function borrar()
{
    localStorage.removeItem('perfil');
}