var focusContainers = document.querySelector('section[tabindex]');

window.onkeydown = function (event) {
	if (event.keyCode == 37) {
		console.log("links mtfer", focusContainers);
	} 
	
	else if (event.keyCode == 39) {
		console.log("rechts mtfer");
	} 
};

document.getElementById('u-ov')
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('openOnEnter').click();
    }
});

function buttonCode(){}