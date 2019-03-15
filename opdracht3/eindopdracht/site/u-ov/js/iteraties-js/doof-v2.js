var main = document.querySelector('main');
var verhaalImg = document.querySelector('.doof-verhaal-1');
var verhaalImg2 = document.querySelector('.doof-verhaal-2');
var hoverLink1 = document.querySelector('.verhaal-1 .hover-link');
var hoverLink2 = document.querySelector('.verhaal-2 .hover-link');

// Eerste deel verhaal

hoverLink1.onmouseout = function () {
   verhaalImg.src = 'img/verhalen/resultaat-64em/01-start-verhaal.png';
};

hoverLink1.onmouseover = function () {
   verhaalImg.src = 'img/verhalen/resultaat-64em/01-start-verhaal-hover.png';
};

hoverLink1.onclick = function () {
    main.classList.add('verhaal-2');
    main.classList.remove('verhaal-1');
    main.style.marginLeft = '100vw';
}

// Tweede deel verhaal

hoverLink2.onmouseout = function () {
   verhaalImg2.src = 'img/verhalen/resultaat-64em/02-tweede-stuk-verhaal.png';
};

hoverLink2.onmouseover = function () {
   verhaalImg2.src = 'img/verhalen/resultaat-64em/02-tweede-stuk-verhaal-hover.png';
};

hoverLink2.onclick = function () {
    main.classList.add('verhaal-3');
    main.classList.remove('verhaal-2');
    main.style.marginLeft = '200vw';
}