// Elementen selecteren
const sldRed = document.getElementById("sldRed");
const sldGreen = document.getElementById("sldGreen");
const sldBlue = document.getElementById("sldBlue");
const lblRed = document.getElementById("lblRed");
const lblGreen = document.getElementById("lblGreen");
const lblBlue = document.getElementById("lblBlue");
const swatch = document.getElementById("swatch");
const btnSave = document.getElementById("btnSave");
const swatchComponents = document.getElementById("swatchComponents");

const setup = () => {
  // Event listeners voor sliders (live update + opslaan bij loslaten)
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach(slider => {
    slider.addEventListener("input", updateColor);
    slider.addEventListener("change", saveSliderSettings);
  });

  // Event listener voor de save knop
  btnSave.addEventListener("click", () => {
    const currentColor = getRgbString();
    addFavorite(currentColor);
  });

  // Start de applicatie door oude data op te halen
  restoreAll();
};

const updateColor = () => {
  const color = getRgbString();
  swatch.style.backgroundColor = color;

  lblRed.textContent = sldRed.value;
  lblGreen.textContent = sldGreen.value;
  lblBlue.textContent = sldBlue.value;
};

const getRgbString = () => {
  return `rgb(${sldRed.value}, ${sldGreen.value}, ${sldBlue.value})`;
};

// --- STORAGE FUNCTIES ---

const saveSliderSettings = () => {
  const settings = {
    r: sldRed.value,
    g: sldGreen.value,
    b: sldBlue.value
  };
  localStorage.setItem("colorpicker_settings", JSON.stringify(settings));
};

const addFavorite = (colorValue) => {
  // 1. Toevoegen aan UI
  createSwatchElement(colorValue);

  // 2. Toevoegen aan localStorage array
  const favorites = JSON.parse(localStorage.getItem("colorpicker_favorites") || "[]");
  favorites.push(colorValue);
  localStorage.setItem("colorpicker_favorites", JSON.stringify(favorites));
};

const restoreAll = () => {
  // Herstel sliders
  const savedSettings = JSON.parse(localStorage.getItem("colorpicker_settings"));
  if (savedSettings) {
    sldRed.value = savedSettings.r;
    sldGreen.value = savedSettings.g;
    sldBlue.value = savedSettings.b;
  }
  updateColor();

  // Herstel favorieten
  const favorites = JSON.parse(localStorage.getItem("colorpicker_favorites") || "[]");
  favorites.forEach(color => createSwatchElement(color));
};

const createSwatchElement = (colorValue) => {
  const div = document.createElement("div");
  div.className = "swatch rounded";
  div.style.backgroundColor = colorValue;

  const btnDelete = document.createElement("input");
  btnDelete.type = "button";
  btnDelete.value = "X";

  // Verwijder logica
  btnDelete.addEventListener("click", (e) => {
    e.stopPropagation(); // Voorkom dat de div-klik afgaat
    div.remove();
    removeFromStorage(colorValue);
  });

  // Klik op swatch om kleur terug te zetten naar sliders
  div.addEventListener("click", () => {
    const rgb = colorValue.match(/\d+/g);
    sldRed.value = rgb[0];
    sldGreen.value = rgb[1];
    sldBlue.value = rgb[2];
    updateColor();
    saveSliderSettings();
  });

  div.appendChild(btnDelete);
  swatchComponents.appendChild(div);
};

const removeFromStorage = (colorValue) => {
  let favorites = JSON.parse(localStorage.getItem("colorpicker_favorites") || "[]");
  favorites = favorites.filter(c => c !== colorValue);
  localStorage.setItem("colorpicker_favorites", JSON.stringify(favorites));
};

window.addEventListener("load", setup);