const familieleden=["lid1","lid2","lid3","lid4","lid5"];

console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

function VoegNaamToe(array,naam){
  array.push(naam);
}

const nieuweNaam = prompt("Voer een extra naam in:");

VoegNaamToe(familieleden, nieuweNaam);

console.log(familieleden.join(', '));

window.addEventListener("load", setup);
