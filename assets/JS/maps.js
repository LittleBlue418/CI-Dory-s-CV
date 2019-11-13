function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: -19.882245,
      lng: 156.565945
    }
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: -12.368470, lng: 162.361579 },
    { lat:  -17.743699, lng: 158.915511 },
    { lat:  -20.479164, lng: 151.735670 },
    { lat: -33.854341, lng: 151.218449 }
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

