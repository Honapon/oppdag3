//variabler hentet fra HTML dokumentet
var trykke = document.getElementById("knapp");
var fargeEl = document.getElementById("inputt");
var tall = document.getElementById("tall");
var tekst = document.getElementById("tekst");
var knp = document.getElementById("knp");
var valgt = document.getElementById("valg")
var lagEl = document.getElementById("lagEl")
var dif = document.getElementById("dif")
var skrivNoe = document.getElementById("skrivNoe")

//Eventlistenner og funksjon som endrer bakgrunnsfarge
trykke.addEventListener("click", byttFarge);

function byttFarge() {
  var farge = fargeEl.value;
  var resultat = CSS.supports("color", farge);

  if (resultat == true) {
    document.body.style.backgroundColor = farge;
  } else {
    // Ikke vær så frekk da!! Det er intas bra!
    alert("du er dust! skriv inn en ny farge");
  }
}

//event listener og funksjon som ser om du 
//er over eller under 18
knp.addEventListener("click", ifAlder);

function ifAlder() {
  if (tall.value >= 18) {
    tekst.innerText = "du er over 18 år!";
  } else {
    // Yippie diddy do it!
    tekst.innerText = "du er under 18 år!";
  }
}

lagEl.addEventListener("click",nyttEl)

function nyttEl() {
  var nyEl = valgt.value
  var nySak = document.createElement(nyEl)
  
  if (nyEl == "h1") {
    nySak.innerText = skrivNoe.value
    dif.appendChild(nySak)

  } else {
    nySak.innerText = skrivNoe.value
    dif.appendChild(nySak)
  }
}


