const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorDisplay = document.getElementById('colorDisplay');
const saveBtn = document.getElementById('saveBtn');
const savedColorsContainer = document.getElementById('savedColors');

function updateColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  const colorString = `rgb(${r}, ${g}, ${b})`;

  colorDisplay.style.backgroundColor = colorString;
  document.getElementById('redVal').textContent = r;
  document.getElementById('greenVal').textContent = g;
  document.getElementById('blueVal').textContent = b;
}

saveBtn.addEventListener('click', () => {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  const colorString = `rgb(${r}, ${g}, ${b})`;

  const swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colorString;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.className = 'delete-btn';

  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    swatch.remove();
  });

  swatch.addEventListener('click', () => {
    redSlider.value = r;
    greenSlider.value = g;
    blueSlider.value = b;
    updateColor();
  });

  swatch.appendChild(delBtn);
  savedColorsContainer.appendChild(swatch);
});

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

updateColor();