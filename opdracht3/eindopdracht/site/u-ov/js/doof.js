var main = document.querySelector('main > article > div:last-of-type');
var verhaalImg = document.querySelector('.doof-verhaal-1');
var verhaalImg2 = document.querySelector('.doof-verhaal-2');
var verhaalImg3 = document.querySelector('.doof-verhaal-3');
var verhaalImg4 = document.querySelector('.doof-verhaal-4');
var verhaalImg45 = document.querySelector('.doof-verhaal-4');
var verhaalImg55 = document.querySelector('.doof-verhaal-5');
var verhaalImg5 = document.querySelector('.doof-verhaal-5');
var hoverLink = document.querySelector('.hover-link');
var hoverLink2 = document.querySelector('.hover-link2');
var hoverLink3 = document.querySelector('.hover-link3');
var hoverLink4 = document.querySelector('.hover-link4');
var hoverLink45 = document.querySelector('.hover-link4-5');
var hoverLink55 = document.querySelector('.hover-link5-5');
var hoverLink5 = document.querySelector('.hover-link5');
 
// Eerste deel verhaal
hoverLink.onclick = function () {
    main.classList.add('verhaal-2');
    main.classList.remove('verhaal-1');
    main.style.marginLeft = '-300vw';
}

hoverLink.onmouseout = function () {
        verhaalImg.src = 'img/verhalen/resultaat-64em/01-start-verhaal.png';
};

hoverLink.onmouseover = function () {
   verhaalImg.src = 'img/verhalen/resultaat-64em/01-start-verhaal-hover.png';
};

// Tweede deel verhaal
hoverLink2.onclick = function () {
    main.classList.add('verhaal-3');
    main.classList.remove('verhaal-2');
    main.style.marginLeft = '-200vw';
}

hoverLink2.onmouseout = function () {
    verhaalImg2.src = 'img/verhalen/resultaat-64em/02-tweede-stuk-verhaal.png';
};

hoverLink2.onmouseover = function () {
    verhaalImg2.src = 'img/verhalen/resultaat-64em/02-tweede-stuk-verhaal-hover.png';
};

// Derde deel verhaal
hoverLink3.onclick = function () {
    main.classList.add('verhaal-4');
    main.classList.remove('verhaal-3');
    main.style.marginLeft = '-1.5vw';
}

hoverLink3.onmouseout = function () {
    verhaalImg3.src = 'img/verhalen/resultaat-64em/03-derde-stuk-verhaal.png';
};

hoverLink3.onmouseover = function () {
    verhaalImg3.src = 'img/verhalen/resultaat-64em/03-derde-stuk-verhaal-hover.png';
};

// Vierde deel verhaal
hoverLink5.onclick = function () {
    main.classList.add('verhaal-4-5');
    main.classList.remove('verhaal-4');
    main.style.marginLeft = '-53vw';
}

hoverLink5.onmouseout = function () {
    verhaalImg5.src = 'img/verhalen/resultaat-64em/04-vierde-stuk-verhaal.png';
};

hoverLink5.onmouseover = function () {
    verhaalImg5.src = 'img/verhalen/resultaat-64em/04-vierde-stuk-verhaal-hover.png';
};

// Tussen vierde en vijfde deel verhaal
hoverLink45.onclick = function () {
    main.classList.add('verhaal-5');
    main.classList.remove('verhaal-4-5');
    main.style.marginLeft = '-101vw';
}

hoverLink45.onmouseout = function () {
    verhaalImg45.src = 'img/verhalen/resultaat-64em/05-vijfde-stuk-verhaal.png';
};

hoverLink45.onmouseover = function () {
    verhaalImg45.src = 'img/verhalen/resultaat-64em/05-vijfde-stuk-verhaal-hover-2.png';
};

hoverLink55.onclick = function () {
    main.classList.add('verhaal-4');
    main.classList.remove('verhaal-4-5');
    main.style.marginLeft = '-1.5vw';
}

hoverLink55.onmouseout = function () {
    verhaalImg55.src = 'img/verhalen/resultaat-64em/04-vierde-stuk-verhaal.png';
};

hoverLink55.onmouseover = function () {
    verhaalImg55.src = 'img/verhalen/resultaat-64em/04-vierde-stuk-verhaal-hover-2.png';
};

// Vijfde deel verhaal
hoverLink4.onclick = function () {
    main.classList.add('verhaal-1');
    main.classList.remove('verhaal-5');
    main.style.marginLeft = '-401vw';
}

hoverLink4.onmouseout = function () {
    verhaalImg4.src = 'img/verhalen/resultaat-64em/05-vijfde-stuk-verhaal.png';
};

hoverLink4.onmouseover = function () {
    verhaalImg4.src = 'img/verhalen/resultaat-64em/05-vijfde-stuk-verhaal-hover.png';
};