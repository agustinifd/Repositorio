//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

// VALIDACION DE ACCESO SIN GOOGLE
btnASG.addEventListener("click",validacionSG);
function validacionSG()
{
    let fuser = document.querySelector("#username").value;
    let fpass = document.querySelector("#password").value;
    loginlleno = false;
    if (fuser.trim().length > 0 && fpass.trim().length > 0)
    {
        username = fuser.trim();
        password = fpass.trim();
        loginlleno = true;
    }
    if(!loginlleno)
    {
    alert(`Ingrese datos validos en ambos campos porfavor`);
    }
    else
    {   auth
        .signInWithEmailAndPassword(fuser, fpass)
        .then(userCredential => {
        sessionStorage.setItem("nombre", fuser)
        window.location.href = "home.html";
        })
        .catch(function(error) {
            alert("ATENCION EMAIL O PASSWORD NO VALIDOS");
            });
    }

}



//// REGISTRO USUARIO /////

const Registroform = document.querySelector("#Registro-form");
Registroform.addEventListener("submit", (e) => {
    e.preventDefault();
    const Registropassword = document.querySelector("#Registro-password").value;
    const Registroemail = document.querySelector("#Registro-email").value;
    auth
    .createUserWithEmailAndPassword(Registroemail, Registropassword)
    .then(userCredential => {
    Registroform.reset();
    $('#RegistroModal').modal('hide');
    })
    .catch(function(error)
    {alert("E-MAIL NO VALIDO O CLAVE MENOR A 6 CARACTERES")})
})

/// ACCESO ANONIMO ///
btnAno.addEventListener("click",ano); 
function ano()
{
    window.location.href = "home.html";
}

///////// GOOGLE LOGIN ///////

goglebtn.addEventListener("click", e => {
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
    .then(result => {
        Accesoform.reset();
        $('#AccesoModal').modal('hide');
        sessionStorage.setItem("nombre", firebase.auth().currentUser.email)
        window.location.href = "https://agustinifd.github.io/Repositorio/home.html";
    })
})