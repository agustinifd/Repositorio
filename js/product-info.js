//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var relates = "";
document.getElementById("btncalificar").addEventListener("click",comentar)
document.addEventListener("DOMContentLoaded", function(e){
  fetch("https://japdevdep.github.io/ecommerce-api/product/all.json")
  .then(function(response)
  {
    return response.json();
  })
  .then(function(relate)
  {
    relates = relate;
  })
  fetch("https://japdevdep.github.io/ecommerce-api/product/5678.json")
    .then(function(response)
    {
     
      return response.json();
    })
    .then(function(productInfo)
    {
     
        document.getElementById("divcont").innerHTML = `<div class="card" style="width: 40rem;">
        <img src=${productInfo.images[0]} class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">${productInfo.name}</h5>
          <p class="card-text">Descripción:${productInfo.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cantidad de Vendidos: '${productInfo.soldCount}</li>
          <li class="list-group-item">A solo ${productInfo.cost}${productInfo.currency}</li>
          <li class="list-group-item">${productInfo.relatedProducts}</li>
        </ul>
        </div>
      <br>
      <br>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src=${productInfo.images[0]} class="d-block w-20%" alt="...">
          </div>
          <div class="carousel-item">
            <img src=${productInfo.images[1]} class="d-block w-20%" alt="...">
          </div>
          <div class="carousel-item">
            <img src=${productInfo.images[2]}  class="d-block w-20%" alt="...">
          </div>
          <div class="carousel-item">
          <img src=${productInfo.images[3]}  class="d-block w-20%" alt="...">
        </div>
        <div class="carousel-item">
        <img src=${productInfo.images[4]}  class="d-block w-20%" alt="...">
      </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`;

      for (let i = 0; i < productInfo.relatedProducts.length; i++) {
        const element = productInfo.relatedProducts[i];
        console.log(relates);
        console.log(relates[i]);
        document.getElementById("divcont").innerHTML = `<div class="card" style="width: 40rem;">
        <img src=${relates[productInfo.relatedProducts[i]].imgSrc} class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">${relates[productInfo.relatedProducts[i]].name}</h5>
          <p class="card-text">Descripción:${relates[productInfo.relatedProducts[i]].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cantidad de Vendidos: '${relates[productInfo.relatedProducts[i]].soldCount}</li>
          <li class="list-group-item">A solo ${relates[productInfo.relatedProducts[i]].cost}${relates[productInfo.relatedProducts[i]].currency}</li>
          <li class="list-group-item"><a href="https://agustinifd.github.io/Repositorio/product-info.html">Conocelo aqui!</a></li>
        </ul>
        </div>`;
      }
    });
    fetch(PRODUCT_INFO_COMMENTS_URL)
    .then(function(respuesta)
    {return respuesta.json();
    })
    .then(function(comentarios)
    {
      let estrellita = `<span class="fa fa-star checked"></span>`
    for (let i = 0; i < comentarios.length; i++) {
        const element = comentarios[i];
        document.getElementById("comentarios").innerHTML =  document.getElementById("comentarios").innerHTML + `<div class="card grid-item" style="width: 18rem;">
        <div class="card-header">
        ${estrellita.repeat(comentarios[i].score)}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${comentarios[i].description}</p>
            <footer class="blockquote-footer">${comentarios[i].user}<cite title="Source Title"><br>Publicado:${comentarios[i].dateTime}</cite></footer>
          </blockquote>
        </div>
      </div>
      `;
    }})});
function comentar()
{
  let time = new Date();
  let estrellita = `<span class="fa fa-star checked"></span>`
  document.getElementById("comentarios").innerHTML = document.getElementById("comentarios").innerHTML + `<div class="card grid-item" style="width: 18rem;">
  <div class="card-header">
  ${estrellita.repeat(document.getElementById("slct").value)}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${document.getElementById("comentarionuevo").value}</p>
      <footer class="blockquote-footer">${document.getElementById("profile").textContent}<cite title="Source Title"><br>Publicado:${time.getFullYear()}-${(time.getMonth()+1)}-${(time.getDate())}<br>${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}</cite></footer>
    </blockquote>
  </div>
</div>`;
}

