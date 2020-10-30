let datosActuales = JSON.parse(localStorage.getItem('perfil'));


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
mostrarSpan();
document.querySelector("#btnGuardarDatosUser").addEventListener("click",guardarDatos);
});

function mostrarSpan()
{
if(localStorage.length === 0)
{
datosActuales.nombre = document.querySelector("#txtNombre").value
datosActuales.edad = document.querySelector("#txtEdad").value; 
datosActuales.telefono = document.querySelector("#txtTel").value; 
datosActuales.email = document.querySelector("#txtEmail").value; 
}
else{
document.querySelector("#spanNombre").innerHTML = datosActuales.nombre;
document.querySelector("#spanEdad").innerHTML = datosActuales.edad; 
document.querySelector("#spanTel").innerHTML = datosActuales.telefono; 
document.querySelector("#spanEmail").innerHTML = datosActuales.email; 
}
if (document.querySelector("#imagen").value !== "") {
document.querySelector("#divVerImagen").innerHTML = `<img src="${datosActuales.imagen}" alt="no se mostro" width="500" height="600">`
}
}

function guardarDatos()
{
    let nombre = document.querySelector("#txtNombre").value; 
    let edad = document.querySelector("#txtEdad").value; 
    let telefono = document.querySelector("#txtTel").value; 
    let email = document.querySelector("#txtEmail").value; 
    let imagen = document.querySelector("#imagen").value; 
    let objDatos = JSON.stringify({ "nombre" : nombre , "edad" : edad , "telefono" : telefono , "email" : email , "imagen" : imagen });
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