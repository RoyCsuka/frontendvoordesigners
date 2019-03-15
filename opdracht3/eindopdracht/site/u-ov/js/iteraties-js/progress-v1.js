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
    var gegevens = document.getElementsByClassName('indicatie');
    var scrolled = (hoogteDocOfBody / height) * 100;
    if (scrolled > 0 && scrolled < 25) {
        
    }
    else if (scrolled > 25 && scrolled < 50) {
        console.log('hallo 2');
    }
    else if (scrolled > 50 && scrolled < 75) {
        console.log('hallo 3');
    }
    else {
        console.log('hallo 4');
    }
    document.querySelector('progress').value = scrolled;
    return scrolled;
};
