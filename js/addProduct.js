var product2 = document.querySelector(".product-block-2");
var addProduct2 = document.querySelector(".add-product");
var gridProduct = document.querySelector(".grid-product");
var removeProduct2 = document.querySelector(".remove-product");

function addProduct() {
    if(product2.style = "display: none") {
        product2.style = `
            display: block;
            
        `
        gridProduct.style = `
            padding: 0;
        `

        addProduct2.style = "display: none";

        removeProduct2.style = `
            display: block;
        `

    }
}

function removeProduct() {
    product2.style = `
        display: none;
            
    `
    gridProduct.style = `
       padding: 50px 0;
    `
    addProduct2.style = "display: block";

    removeProduct2.style = `
        display: none;
    `

}


