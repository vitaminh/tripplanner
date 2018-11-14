const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    const newMarkerElement = document.createElement("div");
    newMarkerElement.style.width = "32px";
    newMarkerElement.style.height = "39px";
    newMarkerElement.style.backgroundImage = `url(${iconURLs[type]})`;
    return new mapboxgl.Marker(newMarkerElement).setLngLat(coords);
};

module.exports = buildMarker;
