document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed");
    fetch(PRODUCTS_URL)
.then(data => data.json())
.then(data =>{
    let listafinalproductos = ""
    data.sort(function(a, b)
    {return b.name - a.name;});
    listafinalproductos = "";
    for (let i = 0; i < data.length; i++) {
    const element = data[i];
    listafinalproductos += `<a class="link" href="product-info.html"><li class="` + i + `">` + `<div class="row">
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
    </div>` + "</li></a>"};
    document.getElementById("cat-list-container").innerHTML = listafinalproductos;
    
});
});

//////////// BUSCADOR //////////

busqueta.addEventListener("keypress", buscador);
btnrel.addEventListener("click", ordenarrlv);
btndsc.addEventListener("click", ordenardsc);
btnasc.addEventListener("click", ordenarasc);

///////////////// CODIGO BUSCADOR ///////////////////


function buscador()
{  
let filtro = document.getElementById("busqueta").value.toLowerCase();  ////// TEXTO A BUSCAR
// console.log(filtro); 
// console.log(document.getElementsByTagName("li")[1].textContent)     /////// TODO EL TEXTO
// elemento1 = document.getElementsByTagName("li")[1].textContent.toLowerCase(); ///PRUEBA MINUSCULAS
//  elemento1.indexOf(filtro);     //// PRUEBA QUE ENCUENTRA                 
//  console.log(elemento1.indexOf(filtro)); ///// FILTRADO
for (let i = 0; i < 4; i++)
{ 
    document.getElementsByTagName("li")[i].textContent.toLowerCase().indexOf(filtro) 
    if (document.getElementsByTagName("li")[i].textContent.toLowerCase().indexOf(filtro) != -1) 
    {
 /////   console.log("ENTRO AL IF"); ////////////
    document.getElementsByTagName("li")[i].style.display = '';
    }
    else 
    {
  ////  console.log("ENTRO AL ELSE");////
    document.getElementsByTagName("li")[i].style.display = 'none';
    }
}
};

////////////////// ORDEN RELEVANCIA////////////////////////
    function ordenarrlv()
{   
    fetch(PRODUCTS_URL)
    .then(data => data.json())
    .then(data =>{
    data.sort(function(a, b)
    {return a.soldCount < b.soldCount;});
    listafinalproductos = "";
    console.log(data);
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    listafinalproductos += `<a class="link" href="product-info.html"><li href="product-info.html" class="` + i + `">` + `<div class="row">
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
</div>` + "</li></a>"};

document.getElementById("cat-list-container").innerHTML = listafinalproductos;

})};
//////////////////////// ORDEN DESENDIENTE /////////////////
function ordenardsc()
{   
    fetch(PRODUCTS_URL)
    .then(data => data.json())
    .then(data =>{
    data.sort(function(a, b)
    {return parseInt(a.cost) < parseInt(b.cost);});
    listafinalproductos = "";
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    listafinalproductos += `<a class="link" href="product-info.html"><li href="product-info.html" class="` + i + `">` + `<div class="row">
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
</div>` + "</li></a>"};

document.getElementById("cat-list-container").innerHTML = listafinalproductos;
})};

///////////////////////////////////////////////// FILTRO //////////////////////////////

function filtro()
{
var filtromax = txtfiltromax.value;
var filtromin = txtfiltromin.value;
fetch(PRODUCTS_URL)
.then(data => data.json())
.then(data =>{
listafinalproductos = "";
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if ((txtfiltromin.value <= parseInt(data[i].cost)) && (parseInt(data[i].cost) <= txtfiltromax.value)) {
        listafinalproductos += `<a class="link" href="product-info.html"><li href="product-info.html" class="` + i + `">`+ `<div class="row">
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
    </div>` + "</li></a>";}
    else {
    listafinalproductos += "";}

    document.getElementById("cat-list-container").innerHTML = listafinalproductos;
}})};




/////////////////////// OREDENAR PRECIO ASENDENTE/////////////
function ordenarasc()
{   
    fetch(PRODUCTS_URL)
    .then(data => data.json())
    .then(data =>{
    data.sort(function(a, b)
    {return parseInt(a.cost) > parseInt(b.cost);});
    listafinalproductos = "";
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    listafinalproductos += `<a class="link" href="product-info.html"><li href="product-info.html" class="` + i + `">` + `<div class="row">
    <div class="col-3">
        <img src="` + data[i].imgSrc + `" class="img-thumbnail">
    </div>
    <div class="col" id="` + i + `">` +
    `
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">` + data[i].name + `</h4>
            <small class="text-muted">` + "Precio: " + data[i].cost + data[i].currency + `</small>
        </div>
        <p class="mb-1">` + data[i].description + "<br>Unidades Vendidas:" + data[i].soldCount + `</p>
    </div>
</div>` + "</li></a>"};

document.getElementById("cat-list-container").innerHTML = listafinalproductos
})};
