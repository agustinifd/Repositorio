
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://japdevdep.github.io/ecommerce-api/cart/987.json")
    .then(function(response) {
        return response.json();
    })
      .then(function(articulo) {

        for (let i = 0; i < articulo.articles.length; i++) {
        document.querySelector("#mostrarcart").innerHTML = `<div class="row" id="articulo${i}">
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
                <h6><strong><b id="precioarticulo${i}">${articulo.articles[i].unitCost}</b> ${articulo.articles[i].currency} <span class="text-muted">x</span></strong></h6>
            </div>
            <div class="col-4 col-sm-4 col-md-4">
                <div class="quantity">
                    
                    <input type="number" id="cantarticulo${i}" step="1" max="99" min="1" value="${articulo.articles[i].count}" title="Qty" class="qty"
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
    document.querySelector(`#cantarticulo${i}`).addEventListener("change",totalfn);
    document.querySelector(`#precioarticulo${i}`).addEventListener("change",totalfn);  
    }
    totalfn();
    });        
    });


    // FUNCTION PARA PONER EL TOTAL
    document.querySelector("#actualizar").addEventListener("click",totalfn);
    function totalfn()
    {

      // LA VARIABLE X EMPIEZA COMO INFINITO POSITIVO PARA ASI DESPUES COMPARARLA CON LA CANTIDAD DE ARTICULOS Y ASI REEMPLAZARLA PODER USARLA COMO CONTADOR PARA SABER CUANTOS PRODUCTOS HAY EN EL CARRO
      total = 0;
      let x = Number.POSITIVE_INFINITY
      for (let i = 0; i < x; i++) 
      {
        if (document.querySelector(`#cantarticulo${i}`) === null)
        {x = i;}
        if (i<x)
        {
        total = total + (Number(document.querySelector(`#cantarticulo${i}`).value) * Number(document.querySelector(`#precioarticulo${i}`).textContent));
        }
      document.querySelector("#total").innerHTML = total;
      
      {

      }
      }
    }

    /// FUNCION PARA BORRAR, RECIBE UN PARAMETRO CUANDO ES LLAMADA, EL PARAMETRO VIENE POR ONCLICK DESDE EL BOTON BASURA DEFINIDO EN EL FOR DONDE SE CARGA LA LISTA DE PRODUCTOS PORQUE ASI EL MISMO i QUE SE ASIGNA A TODO EL CONTENEDOR DEL PRODUCTO ES EL MISMO QUE SE ENVIA POR MEDIO DEL ONCLIK A LA FUNCION BORRAR PARA ASI ELIMINAR ESE CONTENEDOR

function borrar(num)
{
  document.querySelector(`#articulo${num}`).innerHTML = "";
}



