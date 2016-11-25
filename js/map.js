  var map;

  var j$ = jQuery.noConflict();
  // 19.4339794
  // -99.1553828
  j$(document).ready(function(){
    var lat = parseFloat(getUrlParameter("lat"));
    var lng = parseFloat(getUrlParameter("long"));  
    debugger; 
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      zoom: 15
    });     

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map
    });

    j$( ".mapMenu" ).load( "http://192.168.1.40:3000/mapMenu.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "readyMenu" );
        }
    });
  });
  
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
  };