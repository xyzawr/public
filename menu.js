function Expand() {
  var x = document.getElementById("menu");
  if (x) {
    if (getComputedStyle(x, null).display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
}


