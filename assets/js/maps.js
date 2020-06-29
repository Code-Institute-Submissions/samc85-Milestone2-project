function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  var lakes = {lat:54.4609, lng: 3.0886};
  // The map, centered at Uluru


  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru

  var map2 = new.google.maps.Map(
      document.getElementById('mapadventure'), {zoom: 4, center: lakes});
  

  var marker = new google.maps.Marker({position: uluru, map: map});
  var marker2 = new google.maps.Marker({position: lakes, mapadventure: mapadventure});

  }

