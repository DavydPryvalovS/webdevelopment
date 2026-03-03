// Knop 1
var knop1 = document.getElementById('btn1');
knop1.addEventListener('click', function() {
  if (knop1.style.backgroundColor === 'blue') {
    knop1.style.backgroundColor = 'white';
  } else {
    knop1.style.backgroundColor = 'blue';
  }
});

// Knop 2
var knop2 = document.getElementById('btn2');
knop2.addEventListener('click', function() {
  if (knop2.style.backgroundColor === 'green') {
    knop2.style.backgroundColor = 'white';
  } else {
    knop2.style.backgroundColor = 'green';
  }
});

// Knop 3
var knop3 = document.getElementById('btn3');
knop3.addEventListener('click', function() {
  if (knop3.style.backgroundColor === 'red') {
    knop3.style.backgroundColor = 'white';
  } else {
    knop3.style.backgroundColor = 'red';
  }
});