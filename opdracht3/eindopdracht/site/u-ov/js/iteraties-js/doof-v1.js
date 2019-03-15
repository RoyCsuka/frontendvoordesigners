var main = document.querySelector('.verhaal-1');
var verhaalImg = document.querySelector('.verhaal-1 .doof-verhaal-1');
var verhaalImg2 = document.querySelector('.verhaal-2 .doof-verhaal-2');
var hoverLink = document.querySelector('.hover-link');

// Eerste deel verhaal

hoverLink.onmouseout = function () {
   verhaalImg.src = 'img/verhalen/resultaat-64em/01-start-verhaal.png';
   verhaalImg2.src = 'img/verhalen/resultaat-64em/02-tweede-stuk-verhaal.png';
};

hoverLink.onmouseover = function () {
   verhaalImg.src = 'img/verhalen/resultaat-64em/01-start-verhaal-hover.png';
   verhaalImg2.src = 'img/verhalen/resultaat-64em/02-tweede-stuk-verhaal-hover.png';
};

hoverLink.onclick = function () {
    main.classList.add('verhaal-2');
    main.classList.remove('verhaal-1');
}