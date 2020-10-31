document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#btnGuardarDatosUser").addEventListener("click",guardarDatos);
    document.querySelector("#btnEditarDatosUser").addEventListener("click",editarDatos);
    comprobacionDatos();
  });

let nombreActual = document.querySelector("#txtNombre").value;
let edadActual = document.querySelector("#txtEdad").value;
let telActual = document.querySelector("#txtTel").value;
let urlActual = document.querySelector("#txtUrl").value;
let emailActual = document.querySelector("#txtEmail").value;


function comprobacionDatos()
{
if(localStorage.perfil === undefined)
{
document.querySelector("#txtNombre").value = ""; 
document.querySelector("#txtEdad").value = "";
document.querySelector("#txtTel").value = "";
document.querySelector("#txtUrl").value = "";
document.querySelector("#txtEmail").value = ""; 

}
else
{
let localParsed = JSON.parse(localStorage.getItem("perfil"))
document.querySelector("#txtNombre").value = localParsed.nombre; 
document.querySelector("#txtEdad").value = localParsed.edad;
document.querySelector("#txtTel").value = localParsed.tel;
document.querySelector("#txtUrl").value = localParsed.url;
document.querySelector("#txtEmail").value = localParsed.email;

let dataImage = localStorage.getItem('imgData');
dataImage = JSON.parse(dataImage)
let img = document.getElementById('imagen');
img.src = `data:image/png;base64,${dataImage}`;


}   
}

function guardarDatos()
{
    nombreActual = document.querySelector("#txtNombre").value;
    edadActual = document.querySelector("#txtEdad").value;
    telActual = document.querySelector("#txtTel").value;
    urlActual = document.querySelector("#txtUrl").value;
    emailActual = document.querySelector("#txtEmail").value;
    
    let imagen = document.getElementById("imagen");
    imagen.src = urlActual;
    document.querySelector("#mostrar").appendChild(imagen);
    
    imagen = document.getElementById('imagen');
    imgData = getBase64Image(imagen);
    let imgDataJSON = JSON.stringify(imgData);
    localStorage.setItem("imgData", imgDataJSON);

    datosPerfil = JSON.stringify({"nombre" : nombreActual , "edad" : edadActual , "tel" : telActual , "url" : urlActual , "email" : emailActual})
    localStorage.setItem("perfil", datosPerfil); 
    document.querySelectorAll(".form-control").forEach(element => {
    element.setAttribute("disabled","disabled");
    });
    document.querySelector("#btnEditarDatosUser").removeAttribute("disabled");
    document.querySelector("#btnGuardarDatosUser").setAttribute("disabled","disabled");
}

function editarDatos()
{
    document.querySelectorAll(".form-control").forEach(element => {
        element.removeAttribute("disabled");
    });
    document.querySelector("#btnEditarDatosUser").setAttribute("disabled","disabled");
    document.querySelector("#btnGuardarDatosUser").removeAttribute("disabled");
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
  
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
  
    var dataURL = canvas.toDataURL("image/png");
  
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }