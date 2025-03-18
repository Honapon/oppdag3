var trykke = document.getElementById("knapp");
var fargeEl = document.getElementById("inputt");


trykke.addEventListener("click", byttFarge);

function byttFarge() {
  document.body.style.backgroundColor = fargeEl.value
}


