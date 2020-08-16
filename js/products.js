document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed");
    fetch(PRODUCTS_URL)
.then(data => data.json())
.then(data =>{
    let prueba = ""
    for (let i = 0; i < data.length; i++) {
       prueba = prueba + "<div class=" + "containers" + i + ">Nombre: " + data[i].name + "<br>" + "Descripcion: " + data[i].description + "<br>" + "Precio: " + data[i].cost + data[i].currency + "<br>" + "Vendidos: " + data[i].soldCount + "</div>" + "<img src=" + data[i].imgSrc + ">"
    }
    document.getElementById("prueba").innerHTML = prueba;
    })
});