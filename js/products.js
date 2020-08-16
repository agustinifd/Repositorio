//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed");
    fetch(PRODUCTS_URL)
.then(data => data.json())
.then(data =>{
    console.log(data);
    contenido.innerHTML =  "Nombre: " + data[0].name + "<br>" + "Descripción: " + data[0].description + "<br>" + data[0].cost +data[0].currency + "<br>" + "Vendidos:" +" "+ data[0].soldCount + "<br>" + "<img src=" + data[0].imgSrc + ">" + "<br>";
    contenido1.innerHTML = "Nombre: " + data[1].name + "<br>" + "Descripción: " + data[1].description + "<br>" + data[1].cost +data[1].currency + "<br>" + "Vendidos:" +" "+ data[1].soldCount + "<br>" + "<img src=" + data[1].imgSrc + ">" + "<br>";
    contenido2.innerHTML = "Nombre: " + data[2].name + "<br>" + "Descripción: " + data[2].description + "<br>" + data[2].cost +data[2].currency + "<br>" + "Vendidos:" +" "+ data[2].soldCount + "<br>" + "<img src=" + data[2].imgSrc + ">" + "<br>";
    contenido3.innerHTML = "Nombre: " + data[3].name + "<br>" + "Descripción: " + data[3].description + "<br>" + data[3].cost +data[3].currency + "<br>" + "Vendidos:" +" "+ data[3].soldCount + "<br>" + "<img src=" + data[3].imgSrc + ">"
    + "<br>";
    })
});
