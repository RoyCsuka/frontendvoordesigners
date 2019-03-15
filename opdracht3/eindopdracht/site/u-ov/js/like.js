var likeButton = document.querySelector('.like');
var count = document.querySelector('.count').innerHTML;
var optellen = (count ++) + 1;

var body = document.querySelector('body');

likeButton.onclick = function (count) {
    body.classList.toggle('liked');
    count = optellen;
    console.log(count);
}