//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let articulos = [];
console.log(articulos)
document.addEventListener("DOMContentLoaded", function(e){
fetch("https://japdevdep.github.io/ecommerce-api/cart/987.json")
.then(function(response) {
    return response.json();
  })
  .then(function(articulo) {
    articulos = articulo;
    console.log(articulos.articles)
    console.log(articulos.articles[0].name)
    console.log(articulos.articles.name)
  });
});

