// Initialize OpenLayers map
var map = new ol.Map({
    target: 'map-container',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // OpenStreetMap Layer
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([32.8597, 39.9334]), // Centered on Turkey (Ankara)
        zoom: 6 // Adjust zoom level to show multiple cities
    })
});

// List of cities you visited with their coordinates
var cities = [
    { name: "Ankara", coordinates: [32.8597, 39.9334] },   // Longitude, Latitude for Ankara
    { name: "Tekirdağ", coordinates: [27.5110, 40.9780] },   // Longitude, Latitude for Tekirdağ
    { name: "Yozgat", coordinates: [34.8070, 39.8181] },   // Longitude, Latitude for Yozgat
    { name: "Eskişehir", coordinates: [30.5256, 39.7767] },   // Longitude, Latitude for Eskişehir
    { name: "Mersin", coordinates: [34.6415, 36.8121] },   // Longitude, Latitude for Mersin
    { name: "Muğla", coordinates: [28.3667, 37.2153] },   // Longitude, Latitude for Muğla
    { name: "Kocaeli", coordinates: [29.9169, 40.7654] },   // Longitude, Latitude for Kocaeli
    { name: "Antalya", coordinates: [30.7133, 36.8969] }, // Longitude, Latitude for Antalya
    { name: "Bayburt", coordinates: [40.2264, 40.2552] }, // Longitude, Latitude for Bayburt
    { name: "Konya", coordinates: [32.4846, 37.8746] }, // Longitude, Latitude for Konya
    { name: "Adana", coordinates: [35.3213, 37.0000] },   // Longitude, Latitude for Adana
    { name: "Ankara", coordinates: [32.8597, 39.9334] },   // Longitude, Latitude for Ankara
    { name: "Gaziantep", coordinates: [37.0662, 37.3833]
    }, // Longitude, Latitude for Çanakkale
    { name: "Bursa", coordinates: [29.0610, 40.1828] }, // Longitude, Latitude for Bursa
];

// Define star icon
var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Red_star.svg', // Star icon URL
        scale: 0.01, // Adjust scale for the icon size
        anchor: [0.5, 1] // Anchor the icon so the bottom center is at the location
    })
});

// Add markers for each city
cities.forEach(function(city) {
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(city.coordinates)),
        name: city.name
    });

    // Apply the star icon style to each marker
    marker.setStyle(iconStyle);

    var vectorSource = new ol.source.Vector({
        features: [marker]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayer);
});

