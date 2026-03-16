let gemeenten = [];
let invoer;

while (true) {

  invoer = prompt("Geef een gemeente in");

  if (invoer === null || invoer.toLowerCase() === "stop") {
    break;
  }

  gemeenten.push(invoer);
}

gemeenten.sort();

let lijst = document.getElementById("lijst");

for (let i = 0; i < gemeenten.length; i++) {

  let option = document.createElement("option");
  option.text = gemeenten[i];

  lijst.add(option);
}