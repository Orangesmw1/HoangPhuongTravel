
var carouselItem1 = document.querySelector("#carousel-item-1");
var carouselItem2 = document.querySelector("#carousel-item-2");
var carouselItem3 = document.querySelector("#carousel-item-3");

function stopCarousel() {
    
        if(carouselItem1.className == "carousel-item active") {
            carouselItem1.classList.remove("active");
            carouselItem1.classList.add("block-stop-carousel");

        } else if(carouselItem2.className == "carousel-item active") {
            carouselItem2.classList.remove("active");
            carouselItem2.classList.add("block-stop-carousel");

        } else {
            carouselItem3.classList.remove("active");
            carouselItem3.classList.add("block-stop-carousel");
        }   
}


function runCarousel() {
    if(carouselItem1.className == "carousel-item block-stop-carousel") {
        carouselItem1.classList.add("active");
        carouselItem1.classList.remove("block-stop-carousel");

    } else if(carouselItem2.className == "carousel-item block-stop-carousel") {
        carouselItem2.classList.add("active");
        carouselItem2.classList.remove("block-stop-carousel");
    } else {
        carouselItem3.classList.add("active");
        carouselItem3.classList.remove("block-stop-carousel");

    }   
}