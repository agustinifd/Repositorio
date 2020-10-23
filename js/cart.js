let numerototaldeproductos = 0;
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    fetch("https://japdevdep.github.io/ecommerce-api/cart/654.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (articulo) {

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
                    
                    <input type="number" id="cantarticulo${i}" step="1" min="1" value="${(articulo.articles[i].count)}" title="Qty" class="qty"
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
document.querySelector("#actualizar").addEventListener("click", totalfn);
function totalfn() {
    let total = 0;
    let subtotal = 0;
    let costoEnvio = 0;
    for (let i = 0; i <= numerototaldeproductos; i++) {
        if (document.querySelector(`#cantarticulo${i}`) !== null) {
            if (Number(document.querySelector(`#cantarticulo${i}`).value) > 0) {
                if (document.querySelector(`#moneda${i}`).textContent == "USD x") {
                    subtotal = subtotal + (Number(document.querySelector(`#cantarticulo${i}`).value)) * ((Number(document.querySelector(`#precioarticulo${i}`).textContent) * 40));
                }
                if (document.querySelector(`#moneda${i}`).textContent == "UYU x") {
                    subtotal = subtotal + (Number(document.querySelector(`#cantarticulo${i}`).value)) * (Number(document.querySelector(`#precioarticulo${i}`).textContent));
                }
                if (document.querySelector("#metodoenvio").value === "Premium (2-5 días) - Costo del 15% sobre el subtotal.") { costoEnvio = (15 * subtotal) / 100 }
                if (document.querySelector("#metodoenvio").value === "Standard (12 a 15 días) - Costo del 5% sobre el subtotal.") { costoEnvio = (5 * subtotal) / 100 }
                if (document.querySelector("#metodoenvio").value === "Express (5-8 días) - Costo del 7% sobre el subtotal.") { costoEnvio = (7 * subtotal) / 100 }
                total = subtotal + costoEnvio;

            }

            else {
                total = "Ingrese numeros en los campos de cantidad porfavor";
                borrar(i);
                i = numerototaldeproductos + 5;
            }
        }
    }
    if (document.querySelector("#tipodemoneda").value === "UYU") {
        if (document.querySelector("#metodoenvio").value !== "Seleccione el tipo de envio") {
            document.querySelector("#total").innerHTML = `${total} UYU`;
        }
        document.querySelector("#subtotal").innerHTML = `${subtotal} UYU`;
    }
    if (document.querySelector("#tipodemoneda").value === "USD") {
        if (document.querySelector("#metodoenvio").value !== "Seleccione el tipo de envio") {
            document.querySelector("#total").innerHTML = `${Number(total) / 40} USD`;
        }
        document.querySelector("#subtotal").innerHTML = `${Number(subtotal) / 40} USD`;
    }
}

/// FUNCION PARA BORRAR, RECIBE UN PARAMETRO CUANDO ES LLAMADA, EL PARAMETRO VIENE POR ONCLICK DESDE EL BOTON BASURA DEFINIDO EN EL FOR DONDE SE CARGA LA LISTA DE PRODUCTOS PORQUE ASI EL MISMO i QUE SE ASIGNA A TODO EL CONTENEDOR DEL PRODUCTO ES EL MISMO QUE SE ENVIA POR MEDIO DEL ONCLIK A LA FUNCION BORRAR PARA ASI ELIMINAR SOLO ESE CONTENEDOR DE ARTICULO

function borrar(num) {
    document.querySelector(`#articulo${num}`).innerHTML = "";
    totalfn();
}

function bloqueActualizacion() {
    for (let i = 0; i < numerototaldeproductos; i++) {
        document.querySelector(`#cantarticulo${i}`).addEventListener('change', totalfn);  ///EN EL FOR LO QUE SE HACE ES CREAR EL EVENTO CHANGE PARA QUE LLAME A LA FUNCION TOTALFN(CALCULAR LOS TOTALES) LA IDEA DEL FOR SE QUE SOLO SE CREEN LA CANTIDAD DE EVENTOS PARA LA CANTIDAD DE ELEMENTOS QUE EXISTAN
    }
    document.querySelector(`#metodoenvio`).addEventListener('change', totalfn); //// ACA SE LLAMA A LA FUNCION TOTALFN CUANDO EL SELECT DE METODO DE ENVIO ES MODIFICADO.
    document.querySelector(`#tipodemoneda`).addEventListener('change', totalfn);
    document.querySelector("#formadepago").addEventListener("change", formadepago);
}
document.querySelector("#btnCheckout").addEventListener("click", CheckOut);

function CheckOut() {
    let mensaje = "";
    let validacionSub = false;
    let validacionDir = false;
    let validacionMet = false;
    let validacionFormPago = false;
    if (document.querySelector("#subtotal").textContent === "0 UYU" || document.querySelector("#subtotal").textContent === "0 USD") { mensaje += "Debe tener al menos un producto ingresado "; } else { validacionSub = true; }

    if (document.querySelector("#direccion").value === "" || document.getElementById("pais").value === "Elegir") { mensaje += " Ingrese datos validos en forma de envio y pais. " }
    else { validacionDir = true; }

    if (document.querySelector("#metodoenvio").value === "Seleccione el tipo de envio") { mensaje += " Seleccione un metodo de envio " }
    else { validacionMet = true; }

    if (document.querySelector("#formadepago").value === "Seleccione una forma de pago.") { mensaje += " Seleccione forma de pago "}
      if(document.querySelector("#formadepago").value === "Tarjeta de credito"){
         
        if(document.querySelector("#tarjetaCredito").value.trim().length>0&&!isNaN(document.querySelector("#tarjetaCredito").value.trim())&&document.querySelector("#tarjetaSeguridad").value.trim().length===3&&!isNaN(document.querySelector("#tarjetaSeguridad").value.trim()))
        {validacionFormPago = true; }else{ mensaje = " el numero de seguridad deben ser 3 numeros y el campo de numero de tarjeta debe estar compuesto por numeros " }
    }
if (document.querySelector("#formadepago").value === "Transferencia bancaria") {
    if(!isNaN(document.querySelector("#transferenciaBancaria").value.trim()))
    {validacionFormPago = true; }else{mensaje += " Los datos de transferencia bancaria no son correctos verifiquelos"}
}


    if (validacionDir && validacionFormPago && validacionMet && validacionSub) { mensaje = "Felicitaciones su compra fue aprobada con exito!!!" }
    alert(mensaje);
    document.getElementById("mensajitofinal").innerHTML = mensaje;
}

function formadepago() {
    if (document.querySelector("#formadepago").value === "Seleccione una forma de pago.") {
        document.querySelectorAll(".tarjeta").forEach(element => {
            element.setAttribute("disabled", "disabled");
        });
        document.querySelectorAll(".tranferencia").forEach(element => {
            element.setAttribute("disabled", "disabled");
        });
    }

    if (document.querySelector("#formadepago").value === "Tarjeta de credito") {
        document.querySelectorAll(".tarjeta").forEach(element => {
            element.removeAttribute("disabled");
        });
        document.querySelectorAll(".tranferencia").forEach(element => {
            element.setAttribute("disabled", "disabled");
        });
    }

    if (document.querySelector("#formadepago").value === "Transferencia bancaria") {
        document.querySelectorAll(".tarjeta").forEach(element => {
            element.setAttribute("disabled", "disabled");
        });
        document.querySelectorAll(".tranferencia").forEach(element => {
            element.removeAttribute("disabled");
        });
    }

}




