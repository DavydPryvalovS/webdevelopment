document.getElementById("toonResultaatBtn").addEventListener("click", toonResultaat);

function toonResultaat() {

  // roker
  const roker = document.getElementById("roker").checked;
  console.log(roker ? "is roker" : "is geen roker");

  // moedertaal
  const taal = document.querySelector('input[name="taal"]:checked');
  console.log("moedertaal is " + (taal ? taal.value : "niet gekozen"));

  // buurland
  const buurland = document.getElementById("buurland").value;
  console.log("favoriete buurland is " + buurland);

  // bestelling
  const opties = document.getElementById("bestelling")
    .selectedOptions;
  let lijst = [];

  for (let optie of opties) {
    lijst.push(optie.value);
  }

  console.log("bestelling bestaat uit " + lijst.join(" "));
}