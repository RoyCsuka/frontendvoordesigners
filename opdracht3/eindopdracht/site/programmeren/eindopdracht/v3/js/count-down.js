// Voor het aftellen
var countdownNumber = 10;
var launch = "";
var rocketHeight = 0;

// Om het plaatje te veranderen
var imgArray = ["rocket-half-fire.svg", "rocket-no-fire.svg", "rocket-big-fire.svg", "rocket-small-fire.svg"];

// Om het object te laten vliegen!
//var containerRocket = document.getElementById("#bk");
//var topVal = parseInt(obj.style.top, 10);
//obj.style.top = (topVal - 250) + "px";

var intervalCount = window.setInterval(
    function () {
        countdownNumber = countdownNumber - 1;
        document.getElementById("count-down").innerHTML = countdownNumber;

        if (countdownNumber <= 0) {
            // Aftellen en tekst leeg laten
            document.getElementById('count-down').innerHTML = launch;
            // Het tellen triggeren van de volgende functie
            document.getElementById('count-height').innerHTML = rocketHeight + 1;
            // Volgende plaatje
            document.querySelectorAll("img")[0].src = "img/" + imgArray[3];
            // Stoppen met de interval op het scherm d.m.v. de var aanroepen en vragen om de interval te clearen
            clearInterval(intervalCount);
        }
    }, 1000);

// Optellen van id count-height

var countHeight = 0;

var intervalHeight = window.setInterval(
    function countHeight() {
    var countHeightTxt = document.getElementById('count-height').innerHTML;
    
    if (countHeightTxt > 400) {
        document.getElementById("bk").style.bottom = "0";
        // countHeightTxt.innerHTML = parseInt(countHeightTxt.innerHTML) + 1;
    } else {
        document.getElementById("bk").style.bottom = -1 + "px";
        countHeightTxt = countHeightTxt + 1;
        document.getElementById('count-height').innerHTML = countHeightTxt;
    }
}, 100);
