
/*---
function initMap() {

let map;
let service;
let infowindow;


  let keswick = new google.maps.LatLng(54.6013, -3.1347);


  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById("map"), {center: keswick, zoom: 10});

       let bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);


   let request = {
    query: "Keswick",
    fields: ["name", "geometry"],
     };
          exports.service = new google.maps.places.PlacesService(exports.map);
          exports.service.findPlaceFromQuery(request, function(
            results,
            status
          ) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
              }

              exports.map.setCenter(results[0].geometry.location);
            }
          });
        }

       function createMarker(place) {
          let marker = new google.maps.Marker({
            map: exports.map,
            position: place.geometry.location
          });
          google.maps.event.addListener(marker, "click", function() {
            exports.infowindow.setContent(place.name);
            exports.infowindow.open(exports.map, this);
          });
        }

        exports.createMarker = createMarker;
        exports.initMap = initMap;
      ((this.window = this.window || {}));
---*/
 
var map;
var service;
var infowindow;

function initMap() {
  var keswick = new google.maps.LatLng(54.6013, -3.1347);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: keswick,
    zoom: 10
  });

  var request = {
    query: "Lake District National Park",
    fields: ["name", "geometry"]
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
