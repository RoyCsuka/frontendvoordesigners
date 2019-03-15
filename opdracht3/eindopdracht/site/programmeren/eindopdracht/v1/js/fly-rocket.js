var obj = document.getElementById("#rocket");
var topVal = parseInt(obj.style.top, 10);
obj.style.top = (topVal + 250) + "px";

var smallFire = 5 === 5;
var bigFire = 250 === 250;

var imgArray = ["rocket-half-fire.svg", "rocket-no-fire.svg", "rocket-big-fire.svg", "rocket-small-fire.svg"];

var welkeImage = imgArray;
var volgendeImage = imgArray[imgArray.length - 1];

if (smallFire === true) {
    document.querySelectorAll("img")[0].src = "img/" + volgendeImage;
    console.log(topVal);
} else if (bigFire === true ) {
    document.querySelectorAll("img")[0].src = "img/" + volgendeImage;
    console.log(topVal);
}
