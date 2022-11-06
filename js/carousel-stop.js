var readContent = document.querySelector(".read-content");
var active = document.querySelector(".carousel-inner.active");
var carouselItem = document.querySelector(".carousel-item")


function stopCarousel() {
    active.style = `
    display: block;
    `
    carouselItem.style = `
    display: none
    `
}

function runCarousel() {
    active.style = `
    display: block ;
    `
    
}