//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.getElementById("btncalificar").addEventListener("click",comentar)
document.addEventListener("DOMContentLoaded", function(e){
  fetch("https://japdevdep.github.io/ecommerce-api/product/all.json")
    .then(function(response)
    {return response.json();
    })
    .then(function(todos)
    {
    fetch("https://japdevdep.github.io/ecommerce-api/product/5678.json")
    .then(function(response)
    {return response.json();
    })
    .then(function(productInfo)
    {
        document.getElementById("divcont").innerHTML = `<div class="container">
        <div class="card cardpr">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                
                <div class="preview-pic tab-content"><div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="tab-pane active" id="pic-1">
                  
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src=${productInfo.images[0]} class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                      <img src=${productInfo.images[1]} class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                      <img src=${productInfo.images[2]} class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                    <img src=${productInfo.images[3]} class="d-block w-100">
                  </div>
                  <div class="carousel-item">
                  <img src=${productInfo.images[4]} class="d-block w-100">
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
                </div>
              
                <ul class="preview-thumbnail nav nav-tabs">
                  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="" /></a></li>
                  <li><a data-toggle="tab"><img src=${productInfo.images[0]} /></a></li>
                  <li><a data-toggle="tab"><img src=${productInfo.images[1]} /></a></li>
                  <li><a data-toggle="tab"><img src=${productInfo.images[2]} /></a></li>
                  <li><a data-toggle="tab"><img src=${productInfo.images[3]} /></a></li>
                  <li><a data-toggle="tab"><img src=${productInfo.images[4]} /></a></li>
                </ul>
                </div>
                </div>
              </div>
              <div class="details col-md-6">
                <h3 class="product-title">${productInfo.name}</h3>
                <p class="product-description">${productInfo.description}</p>
                <h4 class="price">Precio: <span>${productInfo.cost}${productInfo.currency}</span></h4>
                <p class="vote"><strong>${productInfo.soldCount}</strong> Personas ya compraron y disfrutan este producto!</p>


                <div class="action">
                <input type="button" onclick="location.href='cart.html';" class="add-to-cart btn btn-default" value="Agregar al carrito!"/> 
                  
                  <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                  
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      
      for (let i= 0; i < todos.length; i++) {
         ////BUSCA DE 0 HASTA LA CANTIDAD DE ELEMENTOS QUE HAY EN TODOS LOS PRODUCTOS
        
        if ((productInfo.relatedProducts[i]) != undefined)
        {
        ////ENTRA A LA LISTA DE TODOS LOS AUTOS 
         
      document.getElementById("relacionados").innerHTML += `
      <div class="card card2 related" style="width: 25rem;"><img src=${todos[productInfo.relatedProducts[i]].imgSrc} class="imgrel">
      <div class="card-body"> <h5 class="card-title">${todos[productInfo.relatedProducts[i]].name}</h5>  
      <p class="card-text">Descripción:${todos[productInfo.relatedProducts[i]].description}</p>
      </div><ul class="list-group list-group-flush">
      <li class="list-group-item">Cantidad de Vendidos: ${todos[productInfo.relatedProducts[i]].soldCount}</li>
      <li class="list-group-item">A solo: ${todos[productInfo.relatedProducts[i]].cost}${todos[productInfo.relatedProducts[i]].currency}</li>
      </ul> <div class="card-body"><a href="#" class="card-link">Conocelo Aqui</a> </div> 
      </div>`;
    }}
    })});
    fetch(PRODUCT_INFO_COMMENTS_URL)
    .then(function(respuesta)
    {return respuesta.json();
    })
    .then(function(comentarios)
    {
      let estrellita = `<span class="fa fa-star checked"></span>`
    for (let i = 0; i < comentarios.length; i++) {
        
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

