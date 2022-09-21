var modal = document.getElementsByClassName("modal")[0];
var btn = document.getElementsByClassName("modal-btn")[0];
var span = document.getElementsByClassName("modal-close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
