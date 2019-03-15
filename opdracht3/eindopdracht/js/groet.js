var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  document.querySelector('.groet').innerHTML = 'Goedemorgen!';
} else if (curHr < 18) {
  document.querySelector('.groet').innerHTML = 'Goedemiddag!';
} else {
  document.querySelector('.groet').innerHTML = 'Goedeavond!';
}