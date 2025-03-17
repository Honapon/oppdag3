var trykke = document.getElementById("knapp");
var fargeEl = document.getElementById("inputt");
var bakgrunn = document.getElementsByClassName("kropp")

trykke.addEventListener("click", byttFarge);

function byttFarge() {
  bakgrunn.style.color = fargeEl.value
}
