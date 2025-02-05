var map = L.map('map').setView([51.505, -0.09], 13); // Initial coordinates and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// You can add markers, polygons, etc., to the map here.
