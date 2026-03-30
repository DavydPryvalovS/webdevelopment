let global = {
  IMAGE_PATH_PREFIX: "images/",

  // --- NIEUWE LOGICA GEBASEERD OP JOUW BESTANDEN ---
  // Een lijst van de 'normale' objecten die je mag hitten
  NORMAL_IMAGES: ["cake.png", "silly-smiley.png"],

  // De specifieke bestandsnaam van de bom
  BOMB_IMAGE: "bomb.png",

  IMAGE_SIZE: 48,       // De grootte van de sprite (voor de berekening)
  MOVE_DELAY: 1000,     // Elke seconde een verplaatsing
  score: 0,
  timeoutId: 0          // Id van de timer
};

const setup = () => {
  let btnStart = document.getElementById("btnStart");
  let target = document.getElementById("target");

  btnStart.addEventListener("click", startGame);
  target.addEventListener("click", hitObject);
};

const startGame = () => {
  // Reset spel en UI
  global.score = 0;
  updateScoreUI();

  let target = document.getElementById("target");
  target.style.display = "block"; // Maak object zichtbaar

  // Stop een eventuele lopende timer voor we een nieuwe starten
  clearInterval(global.timeoutId);

  // Start het spel
  moveObject(); // Direct de eerste move
  global.timeoutId = setInterval(moveObject, global.MOVE_DELAY);
};

const moveObject = () => {
  let target = document.getElementById("target");
  let playField = document.getElementById("playField");

  // 1. Willekeurige Positie berekenen
  // (Blijft hetzelfde als de basis)
  let maxLeft = playField.clientWidth - global.IMAGE_SIZE;
  let maxTop = playField.clientHeight - global.IMAGE_SIZE;

  let left = Math.floor(Math.random() * maxLeft);
  let top = Math.floor(Math.random() * maxTop);

  // 2. NIEUWE Logica: Willekeurige Afbeelding Kiezen uit JOUW bestanden
  // Maak een lijst met álle beschikbare bestanden (normaal + bom)
  let allImages = [...global.NORMAL_IMAGES, global.BOMB_IMAGE];

  // Kies een willekeurige index uit deze complete lijst
  let randomIndex = Math.floor(Math.random() * allImages.length);
  let filename = allImages[randomIndex];

  // 3. De wijzigingen toepassen op het element
  target.style.left = left + "px";
  target.style.top = top + "px";
  target.src = global.IMAGE_PATH_PREFIX + filename;

  // NIEUW: We bewaren de bestandsnaam in een attribuut om later te kunnen controleren
  target.setAttribute("data-filename", filename);
};

const hitObject = () => {
  let target = document.getElementById("target");
  // Haal de bewaarde bestandsnaam op
  let filename = target.getAttribute("data-filename");

  // NIEUWE Logica: Controleren op de bestandsnaam van de BOM
  if (filename === global.BOMB_IMAGE) {
    gameOver();
  } else {
    // Correcte hit op een taartje of smiley
    global.score++;
    updateScoreUI();
    // Voor een vlotter spel verplaatsen we het object direct na een hit
    moveObject();
  }
};

const updateScoreUI = () => {
  document.getElementById("scoreText").innerText = "Aantal hits: " + global.score;
};

const gameOver = () => {
  // Stop de timer direct
  clearInterval(global.timeoutId);
  let target = document.getElementById("target");
  target.style.display = "none"; // Verberg het object
  alert("GAME OVER! Je score was: " + global.score);
};

window.addEventListener("load", setup);