var uri = '/opdracht3/eindopdracht/json/u-ov-web.json';
var button = document.querySelector(".info-container > article");
var loaderElement = document.querySelector(".lds-ring");
var section = document.querySelector('section.u-ov');

function showData(jsonObj) {
	var items = jsonObj;

	for (var i = 0; i < items.length; i++) {
		var projectbekijken = document.createElement('article');
		projectbekijken.id = ('openOnEnter');
		projectbekijken.classList.add = items[i].title;

		//Project afbeelding, titel en beschrijving
		var projectPlaatje = document.createElement('img');
		projectPlaatje.src = items[i].cover;
		var itemtitel = document.createElement('h4');
		itemtitel.textContent = items[i].title;
		var casetitel = document.createElement('h5');
		casetitel.textContent = items[i].caseTitel;
		var onderzoekTitel = document.createElement('h5');
		onderzoekTitel.textContent = items[i].onderzoekTitel;
		var onderzoek = document.createElement('p');
		onderzoek.textContent = items[i].onderzoek;

		//Meta Data Tijd
		var meta_data = document.createElement('ul');
		var meta_items = items[i].meta_items;

		for (var j = 0; j < meta_items.length; j++) { 
			var listItem = document.createElement('li');
//			listItem.dataset.icon = "tijd"; < Is voor custom icon ervoor. Moet werken voor meerdere
			listItem.textContent = meta_items[j].item;
			meta_data.appendChild(listItem);
		} //end: for Meta data Tijd
		
		// De Case Info
		var deCase = document.createElement('div');
		var case_items = items[i].case_items;

		for (var k = 0; k < case_items.length; k++) { 
			var listItem = document.createElement('p');
			listItem.textContent = case_items[k].case_info;
			deCase.appendChild(listItem);
		} // Einde: for Case Info
		
//		// De resultaten
//		var resultaten = document.createElement('a');
//		resultaten.href = items[i].resultatenlink;		
//		var resultaten_plaatje = items[i].resultatenimage;
//
//		for (var l = 0; l < resultaten_plaatje.length; l++) { 
//			var listItem = document.createElement('img');
//			listItem.textContent = resultaten_plaatje[l].listItem.src = items[i].resultatenimage;
//			resultaten.appendChild(listItem);
//		} // Einde: for resultaten
		
		
		
		
		// Verberg knop
		var verbergknop = document.createElement('a');
		verbergknop.textContent = "Verberg project";

		verbergknop.info = section; 
		
		verbergknop.onclick = function () {			
			this.info.classList.toggle('open')
		} 
		
		section.addEventListener("click", function () {
			var button = this.parentNode.querySelector('a'); 
		}); // Einde: this Verberg knop

		// Data linken aan JSON file
		projectbekijken.appendChild(projectPlaatje);
		projectbekijken.appendChild(itemtitel);
		projectbekijken.appendChild(meta_data);
		projectbekijken.appendChild(casetitel);
		projectbekijken.appendChild(deCase);
		projectbekijken.appendChild(onderzoekTitel);
		projectbekijken.appendChild(onderzoek);
		projectbekijken.appendChild(verbergknop);

		// nesten
		section.appendChild(projectbekijken);
		div.appendChild(projectbekijken);
	}
}


function loadimagesmetXHR() {
	var request = new XMLHttpRequest();
	request.open('get', uri);
	request.responseType = 'json';

	request.send();

	request.addEventListener("load", function () {
		//console.log("request load: ",request.response);
		loaderElement.classList.remove('show');
		console.log("XHR data", request.response);
		console.table(request.response);
		showData(request.response);
	});
	  request.onload = function() {
	      console.log("request.onload: ",request.response);
	    }
	request.timeout = 10000; // time in milliseconds
	  request.ontimeout = function(e) {
	    // XMLHttpRequest timed out. Do hier iets als de pagina niet geladen word.
	    console.log("ontimeout: " +request.timeout+", het laden duurt te lang !",e);
	  };
	  
	request.onerror = function () {
		console.log('Fetch Error', request.status);
	};
}


//actie
button.onclick = function () {
	loaderElement.classList.add('show');
	//this.classList.add('hide');
	//hier iets doen met de button die laadt, dan weer gewoon een button wordt ...

	section.innerHTML = ""; //main leeghalen. just in case
	loadimagesmetXHR();
};