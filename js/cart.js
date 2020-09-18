//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://japdevdep.github.io/ecommerce-api/cart/987.json")
    .then(function(response) {
        return response.json();
    })
      .then(function(articulo) {
    document.querySelector("#MostrarCart").innerHTML = `
    <section>
    <!--Grid row-->
    <div class="row">
  
      <!--Grid column-->
      <div class="col-lg-8">
  
        <!-- Card -->
        <div class="card wish-list mb-3">
          <div class="card-body">
  
            <h5 class="mb-4">Carrito (<span>${articulo.articles.length}</span> items)</h5>
              <div class="row mb-4">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <img class="img-fluid w-100"
                    src=${articulo.articles[0].src} alt="Sample">
                  <a href="#!">
                    <div class="mask waves-effect waves-light">
                      <div class="mask rgba-black-slight waves-effect waves-light"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-7 col-lg-9 col-xl-9">
                <div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5>${articulo.articles[0].name}</h5>
                      <p class="mb-8 text-muted text-uppercase small">Delicioso olor a monte nativo de pinos</p>
                    </div>
                    <div>
                      <div class="def-number-input number-input safari_only mb-0 w-100">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"></button>
                        <input class="quantity" min="0" name="quantity" value=${articulo.articles[0].count} type="number">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"></button>
                      </div>
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                      </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                          class="fas fa-trash-alt mr-1"></i> Remove item </a>
                      <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                          class="fas fa-heart mr-1"></i> Move to wish list </a>
                    </div>
                    <p class="mb-0"><span><strong>${articulo.articles[0].unitCost}${articulo.articles[0].currency}</strong></span></p>
                  </div>
                </div>
              </div>
            </div>

        <!-- Card -->
  
        <!-- Card -->
        <div class="card mb-3">
          <div class="card-body">
  
            <h5 class="mb-4">Timpo estimado de envio</h5>
  
            <p class="mb-0"> Miercoles., 12.03. - Lunes., 16.03.</p>
          </div>
        </div>
        <!-- Card -->
        <!-- Card -->
        <div class="card mb-3">
          <div class="card-body">
  
            <h5 class="mb-4">Aceptamos</h5>
  
            <img class="mr-2" width="45px"
              src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa">
            <img class="mr-2" width="45px"
              src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express">
            <img class="mr-2" width="45px"
              src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard">
          </div>
        </div>
        <!-- Card -->
  
      </div>
      <!--Grid column-->
  
      <!--Grid column-->
      <div class="col-lg-4">
  
        <!-- Card -->
        <div class="card mb-3">
          <div class="card-body">
  
            <h5 class="mb-3">Costo total</h5>
  
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Temporary amount
                <span>${Number(articulo.articles[0].unitCost)*Number(articulo.articles[0].count)}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>The total amount of</strong>
                  <strong>
                    <p class="mb-0">(incluido envio)</p>
                  </strong>
                </div>
                <span><strong>${Number(articulo.articles[0].unitCost)*Number(articulo.articles[0].count)}${articulo.articles[0].currency}</strong></span>
              </li>
            </ul>
              <button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>
            </div>
        </div>`;
        
    });        
    });




