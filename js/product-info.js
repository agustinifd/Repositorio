//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.getElementById("btncalificar").addEventListener("click",comentar)
document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://japdevdep.github.io/ecommerce-api/product/5678.json")
    .then(function(response)
    {return response.json();
    })
    .then(function(productInfo)
    {
        document.getElementById("divcont").innerHTML = '<ul><p class="p1">' + productInfo.category + 
        '</p><li id="producto1"><img src=' + productInfo.images[0] + '><p class="p2">' + productInfo.name +
        '<br>' + productInfo.cost + productInfo.currency + '</p><p class="p3"> Cantidad de Vendidos: ' + productInfo.soldCount + '</p></li><li id="producto1desc"><p class="p">Descripcion</p>'
        + productInfo.description + 
        `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src=${productInfo.images[0]} class="d-block w-40%" alt="...">
          </div>
          <div class="carousel-item">
            <img src=${productInfo.images[1]} class="d-block w-40%" alt="...">
          </div>
          <div class="carousel-item">
            <img src=${productInfo.images[2]}  class="d-block w-40%" alt="...">
          </div>
          <div class="carousel-item">
          <img src=${productInfo.images[3]}  class="d-block w-40%" alt="...">
        </div>
        <div class="carousel-item">
        <img src=${productInfo.images[4]}  class="d-block w-40%" alt="...">
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
      </div>` 
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
        document.getElementById("comentarios").innerHTML =  document.getElementById("comentarios").innerHTML + `<div class="card" style="width: 18rem;">
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
  document.getElementById("comentarios").innerHTML = document.getElementById("comentarios").innerHTML + `<div class="card" style="width: 18rem;">
  <div class="card-header">
  ${estrellita.repeat(document.getElementById("slct").value)}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${document.getElementById("comentarionuevo").value}</p>
      <footer class="blockquote-footer">${remplazo}<cite title="Source Title"><br>Publicado:${time.getYear() + `-` + time.getMonth() + `-`  + time.getDay()}</cite></footer>
    </blockquote>
  </div>
</div>`;
}

