var app = {
    initializeApp: function() {
        document.addEventListener('deviceready', this.onDeviceReady);
    }, 
    onDeviceReady: function() {
        console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
        document.getElementById('deviceready').classList.add('ready');
        document.getElementById('vibrate-button').addEventListener("click", vibrate);
        document.getElementById('location-button').addEventListener("click", getLocation);
    }    
}

function vibrate() {
    console.log('Vibrating!');
    navigator.vibrate(3000);
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(
        /*
         position.coords {
             latitude,
             longitude,
             altitude,
             accuracy,
             altitudeAccuracy,
             heading,
             speed,
             timestamp
         } 
         */
        function(position) {
            document.getElementById('latitude').innerText = "Latitude: " + position.coords.latitude;
        },
        function(error) {
            alert("Failure!");
        }
    );
}

app.initializeApp();