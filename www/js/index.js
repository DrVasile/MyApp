var app = {
    map: null,
    currentMarker: null,
    defaultPosition: {
        coordinates: {
            latitude: 45.55,
            longitude: -45.55
        }
    },
    initializeApp: function() {
        document.addEventListener('deviceready', app.onDeviceReady);
    },
    onDeviceReady: function() {
        console.log('Running cordova - ' + cordova.platformId + '|' + cordova.version);

        document.getElementById('deviceready').classList.add('ready');
        //document.getElementById('location-button').addEventListener('click', app.getLocation);

        app.getLocation();
    },
    getLocation: function() {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                //document.getElementById('latitude').innerText = "Latitude: " + lat;
                //document.getElementById('longitude').innerText = "Longitude: " + lon;

                var coordinates = new google.maps.LatLng(lat, lon);
                var mapOptions = {
                    zoom: 8,
                    center: coordinates
                }

                app.map = new google.maps.Map(
                    document.getElementById('map-area'),
                    mapOptions
                );

                app.currentMarker = new google.maps.Marker({
                    position: coordinates,
                    map: app.map
                });
            },
            function(error) {
                alert('Failure code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
            }
        );
    }
}

app.initializeApp();