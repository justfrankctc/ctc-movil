document.addEventListener("deviceready", onDeviceReady, false);

var j$ = jQuery.noConflict();

function onDeviceReady() {
  // get lat & long from the URL
  var lat = parseFloat(getUrlParameter("lat"));
  var lng = parseFloat(getUrlParameter("long"));  
    
  // create the map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 15
  });     


  // create the marker with the coords (lat & long)
  var marker = new google.maps.Marker({
    position: {lat: lat, lng: lng},
    map: map
  });

  // insert the menu
  j$( ".mapMenu" ).load( "http://192.168.1.40:3000/mapMenu.html", function(response, status, xhr ) {
      if ( status == "error" ) {
          console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
      } else {
          console.log( "readyMenu" );
      }
  });

  // collapse the menu by default
  j$('#menu').hide();

  // add listener to menu button
  j$('#menuCollapse').click(function(){
      j$('#menu').toggle();
  });

  // add listeners to controle the modals 
  j$('#Ind').click(function(){
      alert('#Ind');
  });
  j$('#Com').click(function(){
      alert('#Com');
  });
  j$('#Ale').click(function(){
      alert('#Ale');
  });
  j$('#Geo').click(function(){
      alert('#Geo');
  });

  // get Geolocation
  // navGeolocation(map);
  
}
  
function getUrlParameter(sParam) {
  
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
  sURLVariables = sPageURL.split('&'),
  sParameterName,
  i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

function navGeolocation(map){
  var infoWindow = new google.maps.InfoWindow({map: map});
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' :'Error: Your browser doesn\'t support geolocation.');
}