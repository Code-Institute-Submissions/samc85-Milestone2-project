

//map for index page contact us
function initMap() {
  // The location of covent garden
  const coventGarden = {lat: 51.512945, lng: 0.125379};
  // The map, centered at covent garden
  const map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: coventGarden});
  // The marker, positioned at covent garden
  const marker = new google.maps.Marker({position: coventGarden, map: map});
}
 

function initMap() {
  // The location of Uluru
  const uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  const map = new google.maps.Maps(
      document.getElementById('map_path'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({position: uluru, map: map});
}