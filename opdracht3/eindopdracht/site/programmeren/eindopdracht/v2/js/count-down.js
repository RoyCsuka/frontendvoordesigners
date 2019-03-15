// Voor het aftellen
var countdownNumber = 3;
var launch = "Lift Off!";
var rocketHeight = null;

// Om het plaatje te veranderen
var imgArray = ["rocket-half-fire.svg", "rocket-no-fire.svg", "rocket-big-fire.svg", "rocket-small-fire.svg", "explosion.gif"];

// Start en stop knop
var startbutton = document.getElementById("start").innerHTML;
var start = document.getElementById("start");
var stop = document.getElementById("stop");

// Rocket waardes
var heightOfBk = 0;
var countHeightTxt = 0;

function intervalCount() {
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
    }
}

function intervalHeight() {
    countHeightTxt = parseInt(document.getElementById('count-height').innerHTML);

    if (countHeightTxt > 1 && countHeightTxt < 80) {
        heightOfBk += 5;
        document.getElementById('rocket').style.bottom = heightOfBk + 'px';
        countHeightTxt += 5;
        document.getElementById('count-height').innerHTML = countHeightTxt;
        console.log('Hier gaat het fout?');
        
    } else if (countHeightTxt > 79 && countHeightTxt < 3000) {
        heightOfBk += 10;
        document.getElementById('rocket').style.bottom = heightOfBk + 'px';
        countHeightTxt = + countHeightTxt + 10;
        document.getElementById('count-height').innerHTML = countHeightTxt;
        console.log(countHeightTxt);
        
    } else if (countHeightTxt > 2999 && countHeightTxt < 3450) {
        heightOfBk = + heightOfBk + 6;
        document.getElementById('rocket').style.bottom = heightOfBk + 'px';
        countHeightTxt = + countHeightTxt + 6;
        document.getElementById('count-height').innerHTML = countHeightTxt;
        document.querySelectorAll("img")[0].src = "img/" + imgArray[0];
        console.log('Hier gaat het fout 3');

    } else if (countHeightTxt > 3449 && countHeightTxt < 3840) {
        heightOfBk = + heightOfBk + 3;
        document.getElementById('rocket').style.bottom = heightOfBk + 'px';
        countHeightTxt = + countHeightTxt + 3;
        document.getElementById('count-height').innerHTML = countHeightTxt;
        document.querySelectorAll("img")[0].src = "img/" + imgArray[1];
        
    } else if (countHeightTxt > 3839) {
        document.querySelectorAll("img")[0].src = "img/" + imgArray[4];
        clearInterval(intervalHeight);
    }
}

document.getElementById("start").addEventListener("click", function(){
    return start = true;
});

document.getElementById("stop").addEventListener("click", function(){
    return start = false;
});


window.setInterval(intervalCount, 1000);
window.setInterval(intervalHeight, 50);
