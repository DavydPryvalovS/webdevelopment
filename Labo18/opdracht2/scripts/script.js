const items = document.querySelectorAll("li");
items.forEach(li => {
  li.className = "listitem";
});

items.forEach(li => {
  li.style.color = "red";
});

const img = document.createElement("img");
img.src = "Schermafbeelding 2025-09-26 091901.png";
document.body.appendChild(img);