var app = {
    initializeApp: function() {
        document.addEventListener('deviceready', app.onDeviceReady);
        document.addEventListener('pause', app.onPause);
        document.addEventListener('resume', app.onResume);

        let sessionData = localStorage.getItem('SessionData');
        let timestamp = new Date(JSON.parse(sessionData).timestamp);
        console.log('--- initializeApp : ' + timestamp);
        
        if (sessionData) {
            console.log('The app was paused.');
        } else {
            console.log('The app was just opened');
        }
    }, 
    onDeviceReady: function() {
        console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
        document.getElementById('deviceready').classList.add('ready');
        document.getElementById('vibrate-button').addEventListener('click', app.vibrate);
        document.getElementById('location-button').addEventListener('click', app.getLocation);
        document.getElementById('camera-button').addEventListener('click', app.takePicture);
    },
    onPause: function(event) {
        let sessionObject = {
            'timestamp': Date.now()
        };

        localStorage.setItem('SessionData', JSON.stringify(sessionObject));
    },
    onResume: function() {
        let sessionData = localStorage.getItem('SessionData');

        if (sessionData) {
            console.log('The app was paused.');
        } else {
            console.log('The app was just opened');
        }
    },
    vibrate: function() {
        console.log('Vibrating!');
        navigator.vibrate(3000);
    },
    getLocation: function() {
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
    },
    takePicture: function() {
        var options = {
            quality: 80,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.FILE_URI,
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetWidth: 300,
            targetHeight: 400
        };

        navigator.camera.getPicture(
            function(imageData) {
                document.getElementById('camera-message').textContent = imageData;
                document.getElementById('photo').src = imageData;
            },
            function(message) {
                document.getElementById('camera-message').textContent = message;
            }, 
            options
        );
    }
}

app.initializeApp();