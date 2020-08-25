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
    listafinalproductos += "<li>" + `<div class="row">
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
</div>` + "</li>"};
    document.getElementById("cat-list-container").innerHTML = listafinalproductos;
    
});
});
////////////////// ORDEN RELEVANCIA////////////////////////
    function ordenarrlv()
{   
    fetch(PRODUCTS_URL)
    .then(data => data.json())
    .then(data =>{
    data.sort(function(a, b)
    {return a.soldCount < b.soldCount;});
    listafinalproductos = "";
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    listafinalproductos += "<li>" + `<div class="row">
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
</div>` + "</li>"};

document.getElementById("cat-list-container").innerHTML = listafinalproductos
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
    listafinalproductos += "<li>" + `<div class="row">
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
</div>` + "</li>"};

document.getElementById("cat-list-container").innerHTML = listafinalproductos
})};

///////////////////////////////////////////////// FILTRO //////////////////////////////

function filtro()
{
console.log(txtfiltro.value);
var filtro = txtfiltro.value
fetch(PRODUCTS_URL)
.then(data => data.json())
.then(data =>{
listafinalproductos = "";
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (parseInt(data[i].cost) < txtfiltro.value) {
        listafinalproductos += listafinalproductos;
        console.log(listafinaldeproductos);
    }}})};




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
    listafinalproductos += "<li>" + `<div class="row">
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
</div>` + "</li>"};

document.getElementById("cat-list-container").innerHTML = listafinalproductos
})};
