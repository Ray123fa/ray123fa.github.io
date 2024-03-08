// Disable right click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

function zoomIn(element) {
  element.style.transform = "scale(1.1)";
  element.style.transition = "transform 0.5s";
}

function zoomOut(element) {
  element.style.transform = "scale(1)";
}

function imgOpen(element) {
  window.open(element.src, "_blank");
}
