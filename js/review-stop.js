var groupReview1 = document.querySelector("#group-review-1");
var groupReview2 = document.querySelector("#group-review-2");
var groupReview3 = document.querySelector("#group-review-3");

function stopReview() {
    if(groupReview1.className == "carousel-item active") {
       groupReview1.classList.remove("active");
       groupReview1.classList.add("stopReview");
    } else if(groupReview2.className == "carousel-item active") {
        groupReview2.classList.remove("active");
        groupReview2.classList.add("stopReview");
    } else if(groupReview3.className == "carousel-item active") {
        groupReview3.classList.remove("active");
        groupReview3.classList.add("stopReview");
    }
} 

function runReview() {
    if(groupReview1.className == "carousel-item stopReview") {
        groupReview1.classList.remove("stopReview");
        groupReview1.classList.add("active");
     } else if(groupReview2.className == "carousel-item stopReview") {
         groupReview2.classList.remove("stopReview");
         groupReview2.classList.add("active");
     } else if(groupReview3.className == "carousel-item stopReview") {
         groupReview3.classList.remove("stopReview");
         groupReview3.classList.add("active");
     }
}