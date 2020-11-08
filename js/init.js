  // Your web app's Firebase configuration
  var firebaseConfig = {
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
  const auth = firebase.auth();
  const fs = firebase.firestore();

const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";


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

////// NOMBRE DE USUARIO //////
var remplazo = document.getElementById("profile");
function remplazito(){
  if (sessionStorage.length > 0){
  remplazo.innerText = sessionStorage.getItem("nombre");}
  else{ remplazo.innerText = "Anonimo";}
};

////// SALIR /////////
document.querySelector("#salir").addEventListener("click",salir)
function salir()
{
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = "index.html";
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
remplazito();
});