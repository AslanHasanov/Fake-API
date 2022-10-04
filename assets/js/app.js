

function pro(){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        let products=''
        data.forEach(product => {
            products+=`
            <div class="col-lg-3 col-4">
            <div class="card ">
            <div class="photo">
            <img src=${product.image} class="card-img-top w-100 img-fluid" alt="...">
        </div>
                <div class="card-body">
                  <h5 class="card-title">${product.price} $</h5>
                  <p class="card-text">${product.title}</p>
                  <a href="#" class="btn btn-primary">Buy</a>
                </div>
              </div>
        </div>
        `
        });
    document.getElementById('list').innerHTML=products
    })
    .catch(error=>console.log(error))
}
pro()