/////////// LOS DISEÑOS UTLIZADOS FUERON EXTRAIDOS DE https://bbbootstrap.com/snippets/product-list-65909871 Y SE LE REALIZARON UNA MINIMA ADAPTACION/////



var arraydeproductos = [];

function Mostrar()
{
    // Esta funcion va ser ejecutada en el DOM 
    // donde voy a ir guardando la informacion para mostrar en pantalla
    htmlContentToAppend = ""; 
    for (let i = 0; i < arraydeproductos.length; i++) 
    {
        ////variable para mostrar autitos de forma ordenada
    
    htmlContentToAppend += 
        `

         <a href="product-info.html"><div id="autonumero${i}" style="border: 1px solid black;
         margin: 30px;" class="col-lg-12 mx-auto">

         <div id="autonumero${i}" class="col-lg-12 mx-auto">

        <!-- List group-->
        <!-- Custom content-->
        <div class="media align-items-lg-center flex-column flex-lg-row p-12">
        <div class="media-body">
        <h5 class="mt-0 font-weight-bold mb-2">${arraydeproductos[i].name}</h5>
        <p class="font-italic text-muted mb-0 small">${arraydeproductos[i].description}</p>
        <div class="d-flex align-items-center justify-content-between mt-1">
        <h6 class="font-weight-bold my-2">${arraydeproductos[i].cost}${arraydeproductos[i].currency}</h6><br>

        <ul class="list-inline small"> Se vendieron(${arraydeproductos[i].soldCount})<br>`;

         for (let autito = 1; autito <= arraydeproductos[i].soldCount; autito++) {
        htmlContentToAppend += `<li class="list-inline-item m-0"><i class="fa fa-car text-success"></i></li>`.repeat(1);
        if (autito % 10 === 0) {
            htmlContentToAppend += `<br>`
        }    
        };
        htmlContentToAppend +=    
        `</ul>
        </div>
        </div>
        <img src="${arraydeproductos[i].imgSrc}" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
        </div> 
        </li>
        </div> 
        </div></a> 
        <!-- End -->`;
    }


document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
}


////////// FUNCION MAYOR PRIMERO /////////////
function MP()
{
    
    htmlContentToAppend = "";
    arrayMP = arraydeproductos.sort(function(a, b){return Number(a.cost) < Number(b.cost)}) 
    Mostrar();
}



/////////////FUNCION MENOR PRECIO ///////
function mP()
{
    
    htmlContentToAppend = "";
    arraydeproductos = arraydeproductos.sort(function(a, b){return Number(a.cost) > Number(b.cost)}) 
    Mostrar(); 
}

///////////////////////////////////FUNCION MAS RELEVANTE /////////////////
function MR()
{
    htmlContentToAppend = "";
    arraydeproductos = arraydeproductos.sort(function(a, b){return Number(a.soldCount) < Number(b.soldCount)}) 
    Mostrar(); 
}

//////////////////////////////////BUSCADOR /////////////
function BUS()
{
    // TOMA LO QUE ESCRIBO EN EL CAMPO DE SEARCH
let filtro = document.querySelector("#txtBUS").value.toLowerCase();
for (let i = 0; i < arraydeproductos.length; i++) {
/// COMO LOS AUTOS ESTAN EN NUMERADOS CON EL ID = "autosnumero" 
//SE TOMA ESTOS ELEMENTOS Y EL TEXTO SE PONE EN MINUSCULA
// SI EL CONTENIDO DEL DIV ES IGUAL AL DE FILTRO ENTONCES SE MANTIENE SINO SE OCULTA
//MEDIANTE DISPLAY
if(document.querySelector(`#autonumero${i}`).textContent.toLowerCase().indexOf(filtro) != -1)
{
  document.querySelector(`#autonumero${i}`).style.display = '';  
   
}   
else
{
 document.querySelector(`#autonumero${i}`).style.display = 'none';
 
}
}
}


function mx()
{
  let mindelhtml = document.querySelector("#range-10a").value
  let maxdelhtml =  document.querySelector("#range-10b").value
  minse = mindelhtml.trim();
maxse = maxdelhtml.trim();
    if(minse.length > 0 && !isNaN(minse) && maxse.length > 0 && !isNaN(maxse))
{
    let min = Number(minse);
    let max = Number(maxse);
    for (let i = 0; i < arraydeproductos.length; i++) {
    /// COMO LOS AUTOS ESTAN EN NUMERADOS CON EL ID = "autosnumero" 
    //SE TOMA ESTOS ELEMENTOS Y EL TEXTO SE PONE EN MINUSCULA
    // SI EL CONTENIDO DEL DIV ES IGUAL AL DE FILTRO ENTONCES SE MANTIENE SINO SE OCULTA
    //MEDIANTE DISPLAY
    if(Number(arraydeproductos[i].cost) >= min && Number(arraydeproductos[i].cost) <= max)
    {
      document.querySelector(`#autonumero${i}`).style.display = '';   
    }   
    else
    {
     document.querySelector(`#autonumero${i}`).style.display = 'none';
    
    }
    }
}
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            arraydeproductos = resultObj.data;
            Mostrar();
        }
        btnMP.addEventListener("click",MP);
        btnmP.addEventListener("click",mP);
        btnMR.addEventListener("click",MR);
        txtBUS.addEventListener("keypress",BUS)
        filtromx.addEventListener("click", mx)
        });
        });

