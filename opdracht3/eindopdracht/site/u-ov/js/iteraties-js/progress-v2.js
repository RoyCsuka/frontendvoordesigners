//var zoekbutton = document.querySelector('img');
//var zoekveld = document.querySelector('header');
//
//zoekbutton.addEventListener('click', function(){
//    zoekveld.classList.toggle('show-search') /*zet class erbij of haalt er weg*/
//    zoekveld.classList.add('show-search') /*zet class erbij*/
//    zoekveld.classList.remove('show-search') /*haalt class weg*/
//})

window.onscroll = function () {
    progressie()
};

function progressie() {
    var hoogteDocOfBody = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (hoogteDocOfBody / height) * 100;
    document.querySelector('progress').value = scrolled;
};
