document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed");
    fetch(PRODUCTS_URL)
.then(data => data.json())
.then(data =>{
    let prueba = ""
    for (let i = 0; i < data.length; i++) {
       prueba = prueba + `<div class="row">
       <div class="col-3">
           <img src="` + data[i].imgSrc + `" class="img-thumbnail">
       </div>
       <div class="col">
           <div class="d-flex w-100 justify-content-between">
               <h4 class="mb-1">` + data[i].name + `</h4>
               <small class="text-muted">` + "Precio: " + data[i].cost + data[i].currency + `</small>
           </div>
           <p class="mb-1">` + data[i].description + "<br>Unidades Vendidas:" + data[i].soldCount + `</p>
       </div>
   </div>`
   }
    document.getElementById("prueba").innerHTML = prueba;
    })
});