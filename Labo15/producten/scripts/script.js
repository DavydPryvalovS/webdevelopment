document.getElementById('herberekenBtn').addEventListener('click', herbereken);

function herbereken() {
  const prijsCells = document.getElementsByClassName('prijs');
  const aantalInputs = document.getElementsByClassName('aantal');
  const btwCells = document.getElementsByClassName('btw');
  const subtotaalCells = document.getElementsByClassName('subtotaal');
  let totaal = 0;

  for (let i = 0; i < prijsCells.length; i++) {
    const prijs = parseFloat(prijsCells[i].textContent);
    const btw = parseFloat(btwCells[i].textContent);
    const aantal = parseInt(aantalInputs[i].value) || 0;

    const subtotaal = aantal * prijs * (1 + btw / 100);
    subtotaalCells[i].textContent = subtotaal.toFixed(2);

    totaal += subtotaal;
  }

  document.getElementById('totaal').textContent = totaal.toFixed(2);
}