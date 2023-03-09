function dataFetching(){
    alert("working");
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => gettingProducts(json))
}

function gettingProducts(products){
    console.log(products);

    var divFromHtml = document.getElementById("products");

    var allProducts = [];

    for(var i=0; i <products.length; i++){
        allProducts += `<div><img src = '${products[i].image}' alt = 'image'></img><h1>${products[i].title}</h1></div>`
    }

    divFromHtml.innerHTML = allProducts;
}