var navBar = document.getElementById("navBar");
var myBody = document.getElementById("myBody");


// function scrollFunction() {
//   if (document.body.scrollTop > 10  || document.documentElement.scrollTop > 10) {
//     navBar.style = `
//         position: fixed !important;
//         top: 0;
//         background-color : rgba(0, 0, 0, 0.5) !important;
//     `
//   } else {
//     navBar.style = `
//         position: absolute !important;
//         top: 0;
//         background-color : transparent !important;
//     `
//   }
  
// }

addEventListener("scroll", function() {
  if(document.body.scrollTop > 10  || document.documentElement.scrollTop > 10) {
    navBar.style = `
        position: fixed !important;
        top: 0;
        background-color : rgba(0, 0, 0, 0.8) !important;
   `
  } else {
        navBar.style = `
            position: absolute !important;
            top: 0;
            background-color : transparent !important;
        `
  }
})