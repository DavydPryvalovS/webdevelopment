const maakMetSpaties = (inputText) => {
  let result = "";


  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] !== " ") {
      result += inputText[i];
      if (i < inputText.length - 1) {
        result += " ";
      }
    }
  }
  return result.trim();
}

document.getElementById("toonButton").addEventListener("click", function () {
  let tekst = document.getElementById("tekstInput").value;
  let resultaat = maakMetSpaties(tekst);
  console.log(resultaat);
});