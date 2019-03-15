function initMap() {
    var amsterdam = {lat: 52.396791,  lng: 4.904877};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        scrollwheel: false,
        center: amsterdam,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ff4646"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#333333"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3 id="firstHeading" class="firstHeading">Le Roy</h3>'+
        '<div id="bodyContent">'+
        'Ridderspoorweg 103, 1032 LL'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: amsterdam,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}