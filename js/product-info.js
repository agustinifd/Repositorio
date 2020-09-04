//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://japdevdep.github.io/ecommerce-api/product/5678.json")
    .then(function(response)
    {return response.json();
    })
    .then(function(productInfo)
    {
        document.getElementById("divcont").innerHTML = '<ul><p class="p1">' + productInfo.category + 
        '</p><li id="producto1"><img src=' + productInfo.images[0] + '><p class="p2">' + productInfo.name +
        '<br>' + productInfo.cost + productInfo.currency + '</p><p class="p3"> Cantidad de Vendidos: ' + productInfo.soldCount + '</p></li><li id="producto1desc"><p class="p">Descripcion</p>'
        + productInfo.description + '</li><table><td><a href="' + productInfo.images[1] + '" target="_blank"><img src="' + productInfo.images[1] + '"></a></td>' + 
        '<td><a href="' + productInfo.images[0] + '" target="_blank"><img src=' + productInfo.images[0] + '></a></td>' + 
        '<td><a href="' + productInfo.images[2] + '" target="_blank"><img src=' + productInfo.images[2] + '></a></td>' + 
        '<td><a href="' + productInfo.images[3] + '" target="_blank"><img src=' + productInfo.images[3] + '></a></td>' + 
        '<td><a href="' + productInfo.images[4] + '" target="_blank"><img src=' + productInfo.images[4] + '></a></td></table></ul></div></div>' 
    });
    fetch(PRODUCT_INFO_COMMENTS_URL)
    .then(function(respuesta)
    {return respuesta.json();
    })
    .then(function(comentarios)
    {
    console.log(comentarios.length)
    for (let i = 0; i < comentarios.length; i++) {
        const element = comentarios[i];
        document.getElementById("comentarios").innerHTML = comentarios[i].name + comentarios[i].description + comentarios[i].score + comentarios[i] + dateTime;
        
    }
    }
    )});
