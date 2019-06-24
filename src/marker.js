const mapboxgl = require("mapbox-gl");
// const map = require("./index")

mapboxgl.accessToken = 'pk.eyJ1IjoiamFzbWluZTg3OCIsImEiOiJjanhha2RpaXIwMDNtNDByOHBudnJzMWRlIn0._9Wdfuufe82N13jw0iX4PA';

function buildMarker(markerType, coordinatesArr) {
    console.log("hi, there!!!")
  if (markerType === 'hotels') {

    const markerhotel = document.createElement("div");
    markerhotel.style.width = "32px";
    markerhotel.style.height = "39px";
    markerhotel.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    console.log("is it working?????")
    return new mapboxgl.Marker(markerhotel).setLngLat(coordinatesArr);
  } else if (markerType === 'restaurants') {

    const markeRestaurant = document.createElement("div");
    markeRestaurant.style.width = "32px";
    markeRestaurant.style.height = "39px";
    markerRestaurant.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

    return new mapboxgl.Marker(markeRestaurant).setLngLat(coordinatesArr);
  } else {
    const markerActivies = document.createElement("div");
    markerActivies.style.width = "32px";
    markerActivies.style.height = "39px";
    markerActivies.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

    return new mapboxgl.Marker(markerActivies).setLngLat(coordinatesArr);
  }
}

module.exports = buildMarker;
