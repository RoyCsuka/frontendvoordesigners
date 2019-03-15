// Voor het aftellen
var countdownNumber = 10;
var launch = "Lift Off!";
var rocketHeight = null;

// Om het plaatje te veranderen
var imgArray = ["rocket-half-fire.svg", "rocket-no-fire.svg", "rocket-big-fire.svg", "rocket-small-fire.svg", "explosion.gif"];

var startbutton = document.getElementById("start").innerHTML;

var start = document.getElementById("start");
var stop = document.getElementById("stop");

start.onclick = function () {
    return start = true;
}

stop.onclick = function () {
    return start = false;
}

var intervalCount = window.setInterval(
    function () {
        if (start === true && countdownNumber >= 1) {
            countdownNumber -= 1;
            document.getElementById("count-down").innerHTML = countdownNumber;
        } else if (start === true && countdownNumber <= 0) {
            // Aftellen en tekst leeg laten
            document.getElementById('count-down').innerHTML = launch;
            // Het tellen triggeren van de volgende functie 
            document.getElementById('count-height').innerHTML = rocketHeight + 1;
            // Volgende plaatje
            document.getElementById('count-height').innerHTML = 2;

            document.querySelectorAll("img")[0].src = "img/" + imgArray[3];
            // Stoppen met de interval op het scherm d.m.v. de var aanroepen en vragen om de interval te clearen
            clearInterval(intervalCount);
        }
    },
    1000);


// Als countdown tekst en object die omhoog gaan met if en else if statements.
var heightOfBk = null;
var countHeightTxt = null;

var intervalHeight = window.setInterval(
    function () {
        var countHeightTxt = document.getElementById('count-height').innerHTML;

        if (countHeightTxt > 1 && countHeightTxt < 80) {
            heightOfBk = + heightOfBk + 5;
            document.getElementById('rocket').style.bottom = heightOfBk + 'px';
            countHeightTxt = + countHeightTxt + 5;
            document.getElementById('count-height').innerHTML = countHeightTxt;

        } else if (countHeightTxt > 79 && countHeightTxt < 3000) {
            heightOfBk = + heightOfBk + 10;
            document.getElementById('rocket').style.bottom = heightOfBk + 'px';
            countHeightTxt = + countHeightTxt + 10;
            document.getElementById('count-height').innerHTML = countHeightTxt;
        } else if (countHeightTxt > 2999 && countHeightTxt < 3450) {
            heightOfBk = + heightOfBk + 6;
            document.getElementById('rocket').style.bottom = heightOfBk + 'px';
            countHeightTxt = + countHeightTxt + 6;
            document.getElementById('count-height').innerHTML = countHeightTxt;
            document.querySelectorAll("img")[0].src = "img/" + imgArray[0];

        } else if (countHeightTxt > 3449 && countHeightTxt < 3850) {
            heightOfBk = + heightOfBk + 3;
            document.getElementById('rocket').style.bottom = heightOfBk + 'px';
            countHeightTxt = + countHeightTxt + 3;
            document.getElementById('count-height').innerHTML = countHeightTxt;
            document.querySelectorAll("img")[0].src = "img/" + imgArray[1];
        } else if (countHeightTxt > 3749) {
            document.querySelectorAll("img")[0].src = "img/" + imgArray[4];
            clearInterval(intervalHeight);
        }
    }, 50);
