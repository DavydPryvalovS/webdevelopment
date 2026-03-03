const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorDisplay = document.getElementById('colorDisplay');
const rgbText = document.getElementById('rgbText');

function updateColor() {
  //values va, sliders ophaln
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  const redVal = document.getElementById('redVal');
  const greenVal = document.getElementById('greenVal');
  const blueVal = document.getElementById('blueVal');


  //values updaten
  const colorString = 'rgb(' + r + ', ' + g + ', ' + b + ')';

  colorDisplay.style.backgroundColor = colorString;
  redVal.textContent = r;
  greenVal.textContent = g;
  blueVal.textContent = b;

  rgbText.textContent = colorString;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);