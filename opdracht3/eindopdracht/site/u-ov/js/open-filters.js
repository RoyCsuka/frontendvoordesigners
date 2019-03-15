var filterButton = document.querySelector('section button:first-of-type');
var body = document.querySelector('body');
var terugButton = document.querySelector('main > div section form:first-of-type button');

filterButton.addEventListener('click', function(){
    body.classList.add('toon-filters') /*zet class erbij of haalt er weg*/
})

terugButton.addEventListener('click', function(){
    body.classList.remove('toon-filters') /*haalt class weg*/
})