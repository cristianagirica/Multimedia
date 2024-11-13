window.onload = function() {
    navigator.geolocation.getCurrentPosition(onGeolocationSucceeded, onGeolocationFailed);

    function onGeolocationSucceeded(location)
    {
        let lat = location.coords.latitude;
        let long = location.coords.longitude;


        var map = L.map('map').setView([lat, long], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        

        L.marker([lat, long]).addTo(map);
        

        L.circle([lat, long], {radius: location.coords.accuracy}).addTo(map);
        
    }

    function onGeolocationFailed(error)
    {
        console.log(error);
    }

}
