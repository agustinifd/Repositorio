let numerototaldeproductos = 0;
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://japdevdep.github.io/ecommerce-api/cart/654.json")
    .then(function(response) {
        return response.json();
    })
      .then(function(articulo) {

        for (let i = 0; i < articulo.articles.length; i++) {
        document.querySelector("#mostrarcart").innerHTML += `<div class="row" id="articulo${i}">
        <div class="col-12 col-sm-12 col-md-2 text-center">
                <img class="img-responsive" src=${articulo.articles[i].src} alt="pinito">
        </div>
        <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
            <h4 class="product-name"><strong>${articulo.articles[i].name}</strong></h4>
            <h4>
                <small>${articulo.articles[i].name}</small>
            </h4>
        </div>
        <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
            <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                <h6><strong><b id="precioarticulo${i}">${(articulo.articles[i].unitCost)}</b> <b id="moneda${i}">${articulo.articles[i].currency} <b><span class="text-muted">x</span></strong></h6>
            </div>
            <div class="col-4 col-sm-4 col-md-4">
                <div class="quantity">
                    
                    <input type="number" id="cantarticulo${i}" step="1" max="99" min="1" value="${(articulo.articles[i].count)}" title="Qty" class="qty"
                           size="4">
                    
                </div>
            </div>
            <div class="col-2 col-sm-2 col-md-2 text-right">
                <button onclick="borrar(${i})" type="button" class="btn btn-outline-danger btn-xs">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
    <hr>`;
    numerototaldeproductos = Number(articulo.articles.length);
    }
    totalfn();
    bloqueActualizacion();
    });        
    });


    // FUNCTION PARA PONER EL TOTAL Y SUB TOTAL
    document.querySelector("#actualizar").addEventListener("click",totalfn);
    function totalfn()
    {
    let total = 0;
    let subtotal = 0;
    let costoEnvio = 0;
    for (let i = 0; i <= numerototaldeproductos; i++) 
    {
    if(document.querySelector(`#cantarticulo${i}`) !== null)
    {
    if(Number(document.querySelector(`#cantarticulo${i}`).value) > 0 )
    {
        if(document.querySelector(`#moneda${i}`).textContent == "USD x")
        {
    subtotal = subtotal + (Number(document.querySelector(`#cantarticulo${i}`).value)) * ((Number(document.querySelector(`#precioarticulo${i}`).textContent)*40));
        }
        if(document.querySelector(`#moneda${i}`).textContent == "UYU x")
        {
    subtotal = subtotal + (Number(document.querySelector(`#cantarticulo${i}`).value)) * (Number(document.querySelector(`#precioarticulo${i}`).textContent));
        }
    if (document.querySelector("#metodoenvio").value === "Premium (2-5 días) - Costo del 15% sobre el subtotal.")
    {costoEnvio = (15*subtotal)/100}
    if(document.querySelector("#metodoenvio").value === "Standard (12 a 15 días) - Costo del 5% sobre el subtotal.")
    {costoEnvio = (5*subtotal)/100}
      if (document.querySelector("#metodoenvio").value === "Express (5-8 días) - Costo del 7% sobre el subtotal.")
    {costoEnvio = (7*subtotal)/100}
    total = subtotal + costoEnvio;

    }

    else 
    {
    total = "Ingrese numeros en los campos de cantidad porfavor"; 
    borrar(i);
    i = numerototaldeproductos + 5;      
    }
    }
    }
    if(document.querySelector("#metodoenvio").value !== "Seleccione el tipo de envio")
    {
        document.querySelector("#total").innerHTML = `${total} UYU`;    
    }    
    document.querySelector("#subtotal").innerHTML = `${subtotal} UYU`;   
    }

    /// FUNCION PARA BORRAR, RECIBE UN PARAMETRO CUANDO ES LLAMADA, EL PARAMETRO VIENE POR ONCLICK DESDE EL BOTON BASURA DEFINIDO EN EL FOR DONDE SE CARGA LA LISTA DE PRODUCTOS PORQUE ASI EL MISMO i QUE SE ASIGNA A TODO EL CONTENEDOR DEL PRODUCTO ES EL MISMO QUE SE ENVIA POR MEDIO DEL ONCLIK A LA FUNCION BORRAR PARA ASI ELIMINAR ESE CONTENEDOR

function borrar(num)
{
  document.querySelector(`#articulo${num}`).innerHTML = "";
}

function bloqueActualizacion()
{
    for (let i = 0; i < numerototaldeproductos; i++) 
    {
    document.querySelector(`#cantarticulo${i}`).addEventListener('change',totalfn); 
    }
    document.querySelector(`#metodoenvio`).addEventListener('change',totalfn);
}

