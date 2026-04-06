
const geboorteDatum = new Date(2005, 12, 25);

// Huidige datum
const vandaag = new Date();

// Verschil in milliseconden
const verschilMs = vandaag - geboorteDatum;

// Omzetten naar dagen
const dagen = Math.floor(verschilMs / (1000 * 60 * 60 * 24));

// Resultaat tonen
console.log("Aantal dagen:", dagen);