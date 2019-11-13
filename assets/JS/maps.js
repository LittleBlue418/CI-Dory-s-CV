function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: -26.396688,
      lng: 174.569519
    }
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [

    { lat: -17.864677, lng: 172.650339 },
    { lat: -33.854341, lng: 151.218449 },
    { lat: -34.569345, lng: 174.823199 },
    { lat: -12.368470, lng: 162.361579 }
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  var markerCluster = new MarkerClusterer(map, markers,
    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }
  );
}

