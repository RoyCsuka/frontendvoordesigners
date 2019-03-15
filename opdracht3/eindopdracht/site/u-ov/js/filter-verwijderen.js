var body = document.querySelector('body');
var apart = document.querySelector('main>section:first-of-type ul li:first-of-type button');
var chaos = document.querySelector('main>section:first-of-type ul li:nth-of-type(2) button');
var detail = document.querySelector('main>section:first-of-type ul li:nth-of-type(3) button');

apart.onclick = function () {
    body.classList.add('apart');
}

chaos.onclick = function () {
    body.classList.add('chaos');
}

detail.onclick = function () {
    body.classList.add('detail');
}