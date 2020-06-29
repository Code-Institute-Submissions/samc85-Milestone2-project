




//map for index page contact us
function initMap() {
  // The location of covent garden
  const coventGarden = {lat: 51.512945, lng: 0.125379};


  // The marker, positioned at covent garden
const map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: coventGarden});

const mapadventure = new google.maps.Map(
      document.getElementById('mapadventure'), {zoom: 8, center: coventGarden});

  // The marker, positioned at covent garden
const marker = new google.maps.Marker({position: coventGarden, map: map});
const mark = new google.maps.Marker({position: coventGarden, mapadventure: mapadventure});
};

google.maps.event.addDomListener(window, 'load', initialize);

