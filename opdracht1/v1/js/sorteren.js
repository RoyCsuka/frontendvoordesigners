var body = document.querySelector('body');
var blauw = document.querySelector('input[name=blauw]');
var bruin = document.querySelector('input[name=bruin]');
var geel = document.querySelector('input[name=geel]');
var oranje = document.querySelector('input[name=oranje]');
var paars = document.querySelector('input[name=paars]');
var roze = document.querySelector('input[name=roze]');
var zwartwit = document.querySelector('input[name=zwartwit]');

blauw.onclick = function () {
    body.classList.toggle('blauw');
}

bruin.onclick = function () {
    body.classList.toggle('bruin');
}

geel.onclick = function () {
    body.classList.toggle('geel');
}

oranje.onclick = function () {
    body.classList.toggle('oranje');
}

paars.onclick = function () {
    body.classList.toggle('paars');
}

roze.onclick = function () {
    body.classList.toggle('roze');
}

zwartwit.onclick = function () {
    body.classList.toggle('zwartwit');
}
