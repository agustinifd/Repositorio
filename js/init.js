const sinlogear = document.querySelectorAll(".sinlogear")
const logeado = document.querySelectorAll(".logeado")
const loginCheck = user => {
    if (user) {
logeado.forEach(link => link.style.display = "block");
sinlogear.forEach(link => link.style.display = "none");
} else {
    logeado.forEach(link => link.style.display = "none");
    sinlogear.forEach(link => link.style.display = "block")
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
    var estado = true
    })
    .catch(function(error) {
        alert("ATENCION EMAIL O PASSWORD NO VALIDOS")
    });
    
})

//////////SALIR/////////////////
const Salir = document.querySelector("#Salir");
Salir.addEventListener("click", e => {
    e.preventDefault();  
    auth.signOut().then(() => {
        alert("Has salido con exito")
        var estado = false
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
            loginCheck(user) }
        })
    

///////// GOOGLE LOGIN ///////
const goglebtn = document.querySelector("#gogle");
goglebtn.addEventListener("click", e => {
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
    .then(result => {
        Accesoform.reset();
        $('#AccesoModal').modal('hide');
    })
})

const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // TODO: Replace the following with your app's Firebase project configuration
    var firebaseConfig = {
      // ...
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


let firebaseConfig = {
  apiKey: "AIzaSyAIcCtwoX_ch7-d6ibphLJcyhiKgkDwSWk",
  authDomain: "prueba-oauth-286403.firebaseapp.com",
  databaseURL: "https://prueba-oauth-286403.firebaseio.com",
  projectId: "prueba-oauth-286403",
  storageBucket: "prueba-oauth-286403.appspot.com",
  messagingSenderId: "829078339573",
  appId: "1:829078339573:web:c23f82ba4ba965ab7eaabc",
  measurementId: "G-FT20SWH0YN"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
   
        
  



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});