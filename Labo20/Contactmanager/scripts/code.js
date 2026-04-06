let personen = [];
let geselecteerdeIndex = -1;

const bewaarBewerktePersoon = () => {
  valideer();
  let errors = document.querySelectorAll(".invalid");

  if (errors.length === 0) {
    let persoon = {
      voornaam: document.getElementById("txtVoornaam").value.trim(),
      familienaam: document.getElementById("txtFamilienaam").value.trim(),
      geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
      email: document.getElementById("txtEmail").value.trim(),
      aantalKinderen: document.getElementById("txtAantalKinderen").value.trim()
    };

    if (geselecteerdeIndex === -1) {
      personen.push(persoon);
    } else {
      personen[geselecteerdeIndex] = persoon;
    }
    updateLijst();
  }
};

const bewerkNieuwePersoon = () => {
  geselecteerdeIndex = -1;
  document.getElementById("txtVoornaam").value = "";
  document.getElementById("txtFamilienaam").value = "";
  document.getElementById("txtGeboorteDatum").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtAantalKinderen").value = "";
  document.getElementById("lstPersonen").selectedIndex = -1;
  clearAllErrors();
};

const toonPersoon = (event) => {
  let index = event.target.selectedIndex;
  if (index !== -1) {
    geselecteerdeIndex = index;
    let persoon = personen[index];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    clearAllErrors();
  }
};

const updateLijst = () => {
  let lstPersonen = document.getElementById("lstPersonen");
  lstPersonen.innerHTML = "";
  for (let i = 0; i < personen.length; i++) {
    let option = document.createElement("option");
    option.text = personen[i].voornaam + " " + personen[i].familienaam;
    option.value = i;
    lstPersonen.add(option);
  }
};

const setup = () => {
  let btnBewaar = document.getElementById("btnBewaar");
  btnBewaar.addEventListener("click", bewaarBewerktePersoon);

  let btnNieuw = document.getElementById("btnNieuw");
  btnNieuw.addEventListener("click", bewerkNieuwePersoon);

  let lstPersonen = document.getElementById("lstPersonen");
  lstPersonen.addEventListener("change", toonPersoon);
};

window.addEventListener("load", setup);