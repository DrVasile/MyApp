'use strict';

let app = {
    map: null,
    currentMarker: null,
    defaultPosition: {
        coordinates: {
            latitude: 47.0224,
            longitude: 28.8091
        }
    },
    initializeApp: function() {
        document.addEventListener('deviceready', app.onDeviceReady);
    },
    onDeviceReady: function() {
        console.log('onDeviceReady()');
        let scriptElement = document.createElement('script');
        document.head.appendChild(scriptElement);
        scriptElement.addEventListener('load', app.onMapReady);
        scriptElement.src = 'https://maps.googleapis.com/maps/api/js';
    },
    onMapReady: function() {
        if (navigator.geolocation) {
            let mapOptions = {
                enableHighAccuracy: true,
                maximumAge: 1000 * 60 * 60,
                timeout: 20000
            }

            navigator.geolocation.getCurrentPosition(
                app.getLocationSuccess,
                app.getLocationError,
                mapOptions
            );
        } else {
            app.getLocationSuccess(app.defaultPosition);
        }
    },
    getLocationSuccess: function(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log('Location success');
        let coordinates = new google.maps.LatLng(lat, lon);
        let mapRenderingOptions = {
            center: coordinates,
            disableDoubleClickZoom: true,
            zoom: 16,
        }

        app.map = new google.maps.Map(
            document.getElementById('map-area'),
            mapRenderingOptions
        );

        app.currentMarker = new google.maps.Marker({
            position: coordinates,
            map: app.map
        });
    },
    getLocationError: function(error) {
        alert('Failure code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        console.log('Failure code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    },
    addMapListeners: function() {
        app.map.addListener('dblclick', app.addMarker);
    },
    addMarker: function(event) {
        let newMarker = new google.Marker({
            map: app.map,
            draggable: false,
            position: {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }
        });

        newMarker.addListener('click', app.markerClick);
        newMarker.addListener('dblclick', app.markerDblClick);
    },
    markerClick: function(event) {
        let thisMarker = this;
        app.currentMarker = thisMarker;
        app.map.panTo(marker.getCurrentPosition());
    },
    markerDblClick: function(event) {
        let thisMarker = this;
        thisMarker.setMap(null);
        app.currentMarker = null;
    }
}

app.initializeApp();