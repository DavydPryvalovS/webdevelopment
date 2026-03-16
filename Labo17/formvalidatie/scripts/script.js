const velden = ["voornaam","familienaam","geboortedatum","email","aantalKinderen"];
const isGetal = t => !isNaN(t);

document.getElementById("valideerBtn")
  .addEventListener("click", () => {
  let ok = true;
  velden.forEach(v => {
    document.getElementById(v).classList.remove("error");
    document.getElementById("error-" + v).textContent = "";
  });

  const v = document.getElementById("voornaam")
    .value.trim();
  if (v.length > 30) {ok=false; document.getElementById("voornaam")
    .classList.add("error"); document.getElementById("error-voornaam").textContent="max. 30 karakters"}

  const f = document.getElementById("familienaam").value.trim();
  if (!f) {ok=false; document.getElementById("familienaam").classList.add("error");
    document.getElementById("error-familienaam").textContent="verplicht veld"}
  else if (f.length>50){ok=false; document.getElementById("familienaam")
    .classList.add("error"); document.getElementById("error-familienaam").textContent="max 50 karakters"}


  const g = document.getElementById("geboortedatum").value.trim();
  const m=g.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(!g){ok=false; document.getElementById("geboortedatum")
    .classList.add("error"); document.getElementById("error-geboortedatum")
    .textContent="verplicht veld"}
  else if(!m || !isGetal(m[1]) || !isGetal(m[2]) || !isGetal(m[3]))
  {ok=false; document.getElementById("geboortedatum").classList.add("error"); document.getElementById("error-geboortedatum").textContent="formaat is niet jjjj-mm-dd"}

  const e=document.getElementById("email").value.trim();
  const at=e.indexOf("@");
  if(!e || at<=0 || at!==e.lastIndexOf("@") || at===e.length-1){ok=false;
    document.getElementById("email").classList.add("error"); document.getElementById("error-email").textContent="geen geldig email adres"}

  const a=document.getElementById("aantalKinderen").value.trim();
  if(a){
    const n=parseInt(a);
    if(!isGetal(a) || n<0){ok=false; document
      .getElementById("aantalKinderen").classList.add("error"); document.getElementById("error-aantalKinderen").textContent="is geen positief getal"}
    else if(n>=99){ok=false; document.getElementById("aantalKinderen").classList.add("error"); document.getElementById("error-aantalKinderen").textContent="is te vruchtbaar"}
  }

  if(ok) alert("proficiat!");
});