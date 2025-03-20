var trykke = document.getElementById("knapp");
var fargeEl = document.getElementById("inputt");
var tall = document.getElementById("tall");
var tekst = document.getElementById("tekst");
var knp = document.getElementById("knp");

trykke.addEventListener("click", byttFarge);

function byttFarge() {
  var farge = fargeEl.value;
  var resultat = CSS.supports("color", farge);

  if (resultat == true) {
    document.body.style.backgroundColor = farge;
  } else {
    alert("du er dust!");
  }
}

knp.addEventListener("click", ifTest);

function ifTest() {
  if (tall.value >= 18) {
    tekst.innerHTML = "du er over 18 år!";
  } else {
    tekst.innerHTML = "du er veldig moden for alderen din ;)";
  }
}
