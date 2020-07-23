  
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 54.4609,
            lng: -3.0886
        }
    });
     

        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);

  
   $(".towns").click(function() {
  console.log(this.dataset.lat+","+this.dataset.lng);
  map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
  map.setZoom(14);
  });
  const towns = [
    ['ambleside', 54.4287, -2.9613],
    ['keswick',  54.6013, -3.1347],
    ['bowness-on-windermere', 54.3647, -2.9196],   
    ['grasmere', 54.4597, -3.0244],  
    ['hawkshead', 54.3758, -2.9994],
    ['lake-district', 54.4609, -3.0886]
  ]

  let bounds = new google.maps.LatLngBounds();
  for (i = 0; i < towns.length; i++) {
    var marker = new google.maps.Marker({
      position: {
        lat: towns[i][1],
        lng: towns[i][2]
      },
      title: towns[i][0],
      map: map
    });
    bounds.extend(marker.getPosition());
  }
  map.fitBounds(bounds);
}

