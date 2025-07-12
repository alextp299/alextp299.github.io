
const texto = "Álex Toledano Plaza";
let i = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (i < texto.length) {
    typingElement.innerHTML = texto.slice(0, i + 1);
    i++;
    setTimeout(type, 100);
  }
}
window.onload = type;
