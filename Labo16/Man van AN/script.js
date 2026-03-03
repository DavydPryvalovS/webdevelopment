const tekst = "De man van An geeft geen hand aan ambetante verwanten";
const zoek = "an";


let countIndexOf = 0;
let pos = 0;
while ((pos = tekst.indexOf(zoek, pos)) !== -1) {
  countIndexOf++;
  pos += zoek.length;
}
console.log("Aantal met indexOf:", countIndexOf);


let countLastIndexOf = 0;
let pos2 = tekst.length;
while ((pos2 = tekst.lastIndexOf(zoek, pos2 - 1)) !== -1) {
  countLastIndexOf++;
}
console.log("Aantal met lastIndexOf:", countLastIndexOf);