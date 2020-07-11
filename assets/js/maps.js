

var adventure = [
        {
            name: "National Park",
            lat: 54.4609, 
            lng: -3.0886
        },

        {
            name: "Ambleside",
            lat: 54.4287,
            lng: -2.9613
        }
];

var markers = [];

var London = {lat: 54.5409, lng: -3.0886};

console.log(adventure);

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: London,
    mapTypeId: "roadmap"
  });


  // Adds a marker at the center of the map.
  addMarker(location);
  

}

// Adds a marker to the map and push to the array.
function addMarker(adventure) {
  let markers = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(adventure);
}

// This event listener will call addMarker() when the map is clicked.
  map.addListener("click", function(event) {
    addMarker(event.latLng);
  });


// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < adventure.length; i++) {
    adventure[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
};
