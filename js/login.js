const sinlogear = document.querySelectorAll(".sinlogear")
const logeado = document.querySelectorAll(".logeado")

let loginCheck = user => {
    if (user) {
logeado.forEach(link => link.style.display = "block");
sinlogear.forEach(link => link.style.display = "none");
console.log("logeado")
} else {
    logeado.forEach(link => link.style.display = "none");
    sinlogear.forEach(link => link.style.display = "block")
    console.log("NOOOOlogeado")
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

///// ACCESO USUARIO /////
const Accesoform = document.querySelector("#Acceso-form");
Accesoform.addEventListener("submit", e => {
    e.preventDefault();  
    const Accesopassword = document.querySelector("#Acceso-password").value;
    const Accesoemail = document.querySelector("#Acceso-email").value;
    
    auth
    .signInWithEmailAndPassword(Accesoemail, Accesopassword)
    .then(userCredential => {
    Accesoform.reset();
    $('#AccesoModal').modal('hide');
    var loged = true 
    window.location.href = "https://agustinifd.github.io/Repositorio/home.html";
    })
    .catch(function(error) {
        alert("ATENCION EMAIL O PASSWORD NO VALIDOS");
        var loged = false;
    });
    
})

//////////SALIR/////////////////
const Salir = document.querySelector("#Salir");
Salir.addEventListener("click", e => {
    e.preventDefault();  
    auth.signOut().then(() => {
        alert("Has salido con exito")
        var loged = false
        window.location.href = "https://agustinifd.github.io/Repositorio/index.html"
        })
})

////////  ESTADO DE AUTH //////
auth.onAuthStateChanged(user =>
    {
        if (user)
        {
            loginCheck(user)
            var loged = true
        }
        else {
            loginCheck(user)
            var loged = false }
        })
    

///////// GOOGLE LOGIN ///////
const goglebtn = document.querySelector("#gogle");
goglebtn.addEventListener("click", e => {
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
    .then(result => {
        Accesoform.reset();
        $('#AccesoModal').modal('hide');
        window.location.href = "https://agustinifd.github.io/Repositorio/home.html";
    })
})