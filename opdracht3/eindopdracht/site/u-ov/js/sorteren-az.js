var sorteerKnop = document.querySelector('body div section form:nth-of-type(2) button[value="volgorde"]');
var sorterenClass = document.querySelector('body div section form:nth-of-type(2) div');

sorteerKnop.addEventListener('click', function(){
    sorterenClass.classList.toggle('sorteren-a-z')
})