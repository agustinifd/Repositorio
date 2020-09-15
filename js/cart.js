//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://japdevdep.github.io/ecommerce-api/cart/987.json")
    .then(function(response) {
        return response.json();
    })
      .then(function(articulo) {
    document.querySelector("#MostrarCart").innerHTML = `<ul class="list-unstyled">
    <li class="media">
      <img src=${articulo.articles[0].src} class="mr-3" alt="...">
      <div class="media-body">
         <h5 class="mt-0 mb-1">${articulo.articles[0].name}</h5>
         Cantidad: ${articulo.articles[0].count} costo unitario ${articulo.articles[0].unitCost}${articulo.articles[0].currency}
        <br> Costo total: ${(articulo.articles[0].count)*(articulo.articles[0].unitCost)}${articulo.articles[0].currency}
       </div>
     </li>`;
        
    });        
    });




