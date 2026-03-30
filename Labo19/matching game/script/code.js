// Globale variabelen volgens opdracht
let AANTAL_HORIZONTAAL = 4;
let AANTAL_VERTICAAL = 3;
let AANTAL_KAARTEN = 6;

let global = {
  kaarten: [],
  omgedraaideKaarten: [],
  isBusy: false,
  aantalGevonden: 0
};

const setup = () => {
  vulKaartenArray();
  shuffle(global.kaarten);
  bouwSpeelveld();
};

const vulKaartenArray = () => {
  for (let i = 1; i <= AANTAL_KAARTEN; i++) {
    global.kaarten.push(`${i}.png`);
    global.kaarten.push(`${i}.png`);
  }
};

const bouwSpeelveld = () => {
  let speelveld = document.getElementById("speelveld");
  speelveld.innerHTML = "";

  for (let i = 0; i < global.kaarten.length; i++) {
    let img = document.createElement("img");
    // AANGEPAST: We gebruiken nu 'pics/' in plaats van 'images/'
    img.src = "pics/achterkant.png";
    img.className = "kaart";
    img.setAttribute("data-kaart", global.kaarten[i]);
    img.addEventListener("click", draaiKaartOm);
    speelveld.appendChild(img);
  }
};

const draaiKaartOm = (event) => {
  let geklikteKaart = event.target;

  if (global.isBusy ||
    geklikteKaart.classList.contains("hidden") ||
    global.omgedraaideKaarten.includes(geklikteKaart)) {
    return;
  }

  // AANGEPAST: We gebruiken nu 'pics/'
  geklikteKaart.src = "pics/" + geklikteKaart.getAttribute("data-kaart");
  global.omgedraaideKaarten.push(geklikteKaart);

  if (global.omgedraaideKaarten.length === 2) {
    controleerMatch();
  }
};

const controleerMatch = () => {
  global.isBusy = true;
  document.body.style.cursor = "wait";

  let kaart1 = global.omgedraaideKaarten[0];
  let kaart2 = global.omgedraaideKaarten[1];

  if (kaart1.getAttribute("data-kaart") === kaart2.getAttribute("data-kaart")) {
    kaart1.classList.add("correct");
    kaart2.classList.add("correct");

    setTimeout(() => {
      kaart1.classList.add("hidden");
      kaart2.classList.add("hidden");
      global.aantalGevonden++;
      resetBeurt();

      if (global.aantalGevonden === AANTAL_KAARTEN) {
        document.getElementById("boodschap").innerText = "Gefeliciteerd! Je hebt gewonnen.";
      }
    }, 1000);
  } else {
    kaart1.classList.add("wrong");
    kaart2.classList.add("wrong");

    setTimeout(() => {
      kaart1.src = "pics/achterkant.png";
      kaart2.src = "pics/achterkant.png";
      kaart1.classList.remove("wrong");
      kaart2.classList.remove("wrong");
      resetBeurt();
    }, 1000);
  }
};

const resetBeurt = () => {
  global.omgedraaideKaarten = [];
  global.isBusy = false;
  document.body.style.cursor = "default";
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

window.addEventListener("load", setup);