







// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
///The user can then click an option to hide, show or delete the markers.
var map;
var markers = [];



function initMap() {
  let Lakes = { lat: 54.4609, lng: -3.0886};
  let Ambleside = { lat: 54.4287, lng: -2.9613};

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: Lakes,
    mapTypeId: "roadmap"
  });


  // Adds a marker at the center of the map.
  addMarker(Lakes);
  addMarker(Ambleside);
  

}

// Adds a marker to the map and push to the array.
function addMarker(location) {
  let marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}

// This event listener will call addMarker() when the map is clicked.
  map.addListener("click", function(event) {
    addMarker(event.latLng);
  });



// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

