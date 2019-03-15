var opslaanButton = document.querySelector('.opslaan');
var body = document.querySelector('body');

opslaanButton.onclick = function () {
    body.classList.toggle('toegevoegd');
}