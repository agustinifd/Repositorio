



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
    window.location.href = "https://agustinifd.github.io/Repositorio/home.html";
    })
    .catch(function(error) {
        alert("ATENCION EMAIL O PASSWORD NO VALIDOS");
        });
    
})

//////////SALIR/////////////////
const Salir = document.querySelector("#Salir");
Salir.addEventListener("click", e => {
    e.preventDefault();  
    auth.signOut().then(() => {
        alert("Has salido con exito")
        window.location.href = "https://agustinifd.github.io/Repositorio/index.html"
        })
})

////////  ESTADO DE AUTH //////
auth.onAuthStateChanged(user =>
    {
        if (user)
        {
            loginCheck(user)
            
        }
        else {
            loginCheck(user)
            }
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