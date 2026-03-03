const kopieer = () => {
  let txtInput = document.getElementById("txtInput");
  let tekst = txtInput.value;
  let output = document.getElementById("txtOutput");
  output.innerHTML = tekst;
}

const setup = () => {
  let btnKopieer = document.getElementById("btnKopieer");
  btnKopieer.addEventListener("click", kopieer);
}

window.addEventListener("load", setup);
