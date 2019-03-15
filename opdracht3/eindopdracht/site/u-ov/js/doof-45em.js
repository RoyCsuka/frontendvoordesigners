var main45 = document.querySelector('main > article > div:nth-of-type(3)');
var verhaalImg45 = document.querySelector('.doof-verhaal-1-45em');
var verhaalImg245 = document.querySelector('.doof-verhaal-2-45em');
var verhaalImg345 = document.querySelector('.doof-verhaal-3-45em');
var verhaalImg445 = document.querySelector('.doof-verhaal-4-45em');
var verhaalImg4545 = document.querySelector('.doof-verhaal-4-45em');
var verhaalImg5545 = document.querySelector('.doof-verhaal-5-45em');
var verhaalImg545 = document.querySelector('.doof-verhaal-5-45em');
var hoverLink45 = document.querySelector('.hover-link-45em');
var hoverLink245 = document.querySelector('.hover-link2-45em');
var hoverLink345 = document.querySelector('.hover-link3-45em');
var hoverLink445 = document.querySelector('.hover-link4-45em');
var hoverLink4545 = document.querySelector('.hover-link4-5-45em');
var hoverLink5545 = document.querySelector('.hover-link5-5-45em');
var hoverLink545 = document.querySelector('.hover-link5-45em');

// Eerste deel verhaal
hoverLink45.onclick = function () {
    main45.classList.add('verhaal-2-45em');
    main45.classList.remove('verhaal-1-45em');
    main45.style.marginLeft = '-300vw';
}

hoverLink45.onmouseout = function () {
        verhaalImg45.src = 'img/verhalen/resultaat-45em/01-start-verhaal.png';
};

hoverLink45.onmouseover = function () {
   verhaalImg45.src = 'img/verhalen/resultaat-45em/01-start-verhaal-hover.png';
};

// Tweede deel verhaal
hoverLink245.onclick = function () {
    main45.classList.add('verhaal-3-45em');
    main45.classList.remove('verhaal-2-45em');
    main45.style.marginLeft = '-200vw';
}

hoverLink245.onmouseout = function () {
    verhaalImg245.src = 'img/verhalen/resultaat-45em/02-tweede-stuk-verhaal.png';
};

hoverLink245.onmouseover = function () {
    verhaalImg245.src = 'img/verhalen/resultaat-45em/02-tweede-stuk-verhaal-hover.png';
};

// Derde deel verhaal
hoverLink345.onclick = function () {
    main45.classList.add('verhaal-4-45em');
    main45.classList.remove('verhaal-3-45em');
    main45.style.marginLeft = '-1.5vw';
}

hoverLink345.onmouseout = function () {
    verhaalImg345.src = 'img/verhalen/resultaat-45em/03-derde-stuk-verhaal.png';
};

hoverLink345.onmouseover = function () {
    verhaalImg345.src = 'img/verhalen/resultaat-45em/03-derde-stuk-verhaal-hover.png';
};

// Vierde deel verhaal
hoverLink545.onclick = function () {
    main45.classList.add('verhaal-5-45em');
    main45.classList.remove('verhaal-4-45em');
    main45.style.marginLeft = '-101vw';
}

hoverLink545.onmouseout = function () {
    verhaalImg545.src = 'img/verhalen/resultaat-45em/04-vierde-stuk-verhaal.png';
};

hoverLink545.onmouseover = function () {
    verhaalImg545.src = 'img/verhalen/resultaat-45em/04-vierde-stuk-verhaal-hover.png';
};

// Vijfde deel verhaal
hoverLink445.onclick = function () {
    main45.classList.add('verhaal-1-45em');
    main45.classList.remove('verhaal-5-45em');
    main45.style.marginLeft = '-401vw';
}

hoverLink445.onmouseout = function () {
    verhaalImg445.src = 'img/verhalen/resultaat-45em/05-vijfde-stuk-verhaal.png';
};

hoverLink445.onmouseover = function () {
    verhaalImg445.src = 'img/verhalen/resultaat-45em/05-vijfde-stuk-verhaal-hover.png';
};