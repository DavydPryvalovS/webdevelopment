function maakP() {
  const p = document.createElement("p");
  p.textContent = "Nieuw p-element";
  document.getElementById("myDIV").appendChild(p);
}