# Roy Csuka - opdracht 2
Voor opdracht twee kun [hier](https://roycsuka.github.io/frontendvoordesigners/opdracht2/bijlagen/breakdown.jpeg) me breakdown schets vinden. Op de breakdownschets zie onderaan mijn concept staan. Bij 1 zie je de zero statement. Bij 2 hover je in vanaf rechts over het blokje heen en komt de overlay dus ook van rechts, bij 3 hover je vanaf onder en dan komt de overlay dus vanaf onder in enzovoort. 

Voor deze opdracht heb ik me verdiept in de mouseover statement van JavaScript en hieronder zijn de iteraties te zien betreft vormgeving en JavaScript.

Voor de [eerste demo](https://roycsuka.github.io/frontendvoordesigners/opdracht2/v1/index.html) heb ik het eerst zelf even proberen te fixen zonder Google te gebruiken maar kwam er vrij snel achter dat ik nog niet vakbekwaam ben voor zo'n complexe interactie. Dus heb ik voor mijzelf eerst een aantal dingen opgesteld: 

1. Hover aan een kant van de div
2. https://www.adlibweb.com/direction-aware-hover-effects/ 
3. Positie veranderen van de div met css variabel
4. https://stackoverflow.com/questions/41370741/how-do-i-edit-a-css-variable-using-js

Voor de eerste demo heb ik de JavaScript proberen te begrijpen wat van [codepen](https://codepen.io/noeldelgado/pen/pGwFx/) kwam. Maar ik ben bang dat iemand mij dit moet gaan uitleggen. Het is erg complex en misschien is er voor mij wel een makkelijkere oplossing.

Voor de [tweede demo](https://roycsuka.github.io/frontendvoordesigners/opdracht2/v2/index.html) heb ik een pure CSS oplossing gevonden die ik beter begreep. Wat er gebeurd voor deze oplossing is dat er per blokje aan de boven, rechter, onder en linker -kant een container zit. Als je .linker__kant:before:hover komt de container die links van het midden staat in het midden te staan. De :before is dus onderdeel van de linkerkant die staat over het midden blok heen zie [afbeelding](https://roycsuka.github.io/frontendvoordesigners/opdracht2/bijlagen/)

Om iets te doen met JavaScript heb ik voor de derde demo een 
[Demo 3](https://roycsuka.github.io/frontendvoordesigners/opdracht2/v3/index.html)