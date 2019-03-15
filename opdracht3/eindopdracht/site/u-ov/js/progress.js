var progressBar = document.querySelector('progress');
var body = document.querySelector('body');
var hoogteHtml = document.querySelector('html').clientHeight;
var hoogteVerhalen = document.querySelector('header ul, main div#top section:first-of-type, aside section, body>footer section, main>section').clientHeight;
var hoogteAside = document.querySelector('aside').clientHeight;
var hoogteFooter = document.querySelector('body>footer:last-of-type').clientHeight;
var hoogteContent = (hoogteVerhalen + hoogteAside) + hoogteHtml;

window.onscroll = function () {
    progressie()
};

function progressie() {
    var hoogteDocOfBody = document.body.scrollTop || document.documentElement.scrollTop;
    var height = (document.documentElement.scrollHeight - document.documentElement.clientHeight) - hoogteContent;
    var scrolled = (hoogteDocOfBody / height) * 100;
    if (scrolled >= 6 && scrolled <= 7) {
        progressBar.classList.add('fixed');
        body.classList.add('body-progressbar-fixed');
    }
    else if (scrolled < 5) {
        progressBar.classList.remove('fixed');
        body.classList.remove('body-progressbar-fixed');
        body.classList.remove('remove-buttons');
    }
    else if (scrolled >= 5 && scrolled <= 25) {
        progressBar.classList.add('fixed');
        body.classList.add('body-progressbar-fixed');
        body.classList.add('remove-buttons');
        body.classList.remove('een');
    }
    else if (scrolled >= 25 && scrolled <= 50) {
        progressBar.classList.add('fixed');
        body.classList.add('body-progressbar-fixed');
        body.classList.add('remove-buttons');
        body.classList.add('een');
        body.classList.remove('twee');
        body.classList.remove('drie');
        body.classList.remove('vier');
    }
    else if (scrolled >= 50 && scrolled <= 75) {
        progressBar.classList.add('fixed');
        body.classList.add('body-progressbar-fixed');
        body.classList.add('remove-buttons');
        body.classList.remove('een');
        body.classList.add('twee');
        body.classList.remove('drie');
        body.classList.remove('vier');
    }
    else if (scrolled >= 75 && scrolled <= 99) {
        progressBar.classList.add('fixed');
        body.classList.add('body-progressbar-fixed');
        body.classList.add('remove-buttons');
        body.classList.remove('een');
        body.classList.remove('twee');
        body.classList.add('drie');
        body.classList.remove('vier');
    }
    else if (scrolled >= 100) {
        progressBar.classList.add('fixed');
        body.classList.add('body-progressbar-fixed');
        body.classList.add('remove-buttons');
        body.classList.remove('een');
        body.classList.remove('twee');
        body.classList.remove('drie');
        body.classList.add('vier');
    }
    document.querySelector('progress').value = scrolled;
    return scrolled;
};