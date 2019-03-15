var themaButton = document.querySelector('main > div section form:first-of-type div:first-of-type button');
var leesduurButton = document.querySelector('main > div section form:first-of-type div:nth-of-type(2) button');
var themaOverlayFilters = document.querySelector('body main > div section form:first-of-type div:first-of-type');
var leesduurOverlayFilters = document.querySelector('body main > div section form:first-of-type div:nth-of-type(2)');

themaButton.addEventListener('click', function(){
    themaOverlayFilters.classList.toggle('toon-filters-bigscrn')
    leesduurOverlayFilters.classList.remove('toon-filters-bigscrn')
})

leesduurButton.addEventListener('click', function(){
    leesduurOverlayFilters.classList.toggle('toon-filters-bigscrn')
    themaOverlayFilters.classList.remove('toon-filters-bigscrn')
})