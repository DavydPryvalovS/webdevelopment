const student1 = {
  naam: "Davyd P",
  leeftijd: 21,
  vakken: ["JavaScript", "Java", "Databases"],
  adres: {
    straat: "Kerkstraat 1",
    stad: "Kortrijk"
  },
  geboortedatum: new Date("2008-05-15"),
  actief: true
};

const jsonString = JSON.stringify(student1);
console.log(jsonString);

const student2 = JSON.parse(jsonString);
console.log(student2.naam);
console.log(student2);

console.log(typeof student2.geboortedatum);

const echteDatum = new Date(student2.geboortedatum);
console.log(echteDatum);

const adres = { stad: "Kortrijk" };

const student3 = {
  adres1: adres,
  adres2: adres
};

const json3 = JSON.stringify(student3);
console.log(json3);