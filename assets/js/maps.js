
    var map;
    var service;
    var infowindow;

function initMap() {

  let park = new google.maps.LatLng(54.6013, -3.1347);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: park,
    zoom: 10
  });

  let request = {
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
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}





/*-----   map for country page  ------*/


function initMap1() {
  let keswick = new google.maps.LatLng(54.547512, 3.158908);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("mapcountry"), {
    center: keswick,
    zoom: 10
  });

  let request = {
    query: "Keswick",
    fields: ["name", "geometry"]
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker1(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker1(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}



/*-----   map for comfort page  ------*/


function initMap2() {
  let keswick = new google.maps.LatLng(54.547512, 3.158908);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("mapcomfort"), {
    center: keswick,
    zoom: 10
  });

  let request = {
    query: "Grange Lake District",
    fields: ["name", "geometry"]
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker1(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker2(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

