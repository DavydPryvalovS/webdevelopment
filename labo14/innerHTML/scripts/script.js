function setup() {
  let pElement = document.getElementById("txtOutput");
  let knop = document.getElementById("wijzigKnop");

  knop.addEventListener("click", function() {
    pElement.innerHTML = "Welkom!";
  });
}

window.addEventListener("load", setup);
