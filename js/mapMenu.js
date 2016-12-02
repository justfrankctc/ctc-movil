var j$ = jQuery.noConflict();

j$('#menu').toggle();

j$('#menuCollapse').click(function(){
    j$('#menu').toggle();
});

j$('#customCmd').hide();
j$('#cmd').change(function(){
    if(this.value=='customCmd'){
        j$('#customCmd').show();
    } else{
        j$('#customCmd').hide();
    }
});

j$('#sendCmd').click(function(){
    alert('Comando enviado');
});

var triangleCoords = undefined;
var bermudaTriangle = undefined;
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var org = undefined;
var dest =  undefined;
// j$('#geo001').click(function(){ 
    // closeModal(modalGeo);
    // var checked = j$('#geo001').prop('checked');
    // if(bermudaTriangle == undefined){ 
        // if(triangleCoords ==undefined){
            triangleCoords = [
                {lat: 19.438591, lng: -99.154154},
                {lat: 19.4339584, lng: -99.1551004},
                {lat: 19.436710, lng: -99.150229}
            ];
        // }
         bermudaTriangle = new google.maps.Polygon({
            paths: triangleCoords,
            strokeColor: '#517F17',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#78be20',
            fillOpacity: 0.35
        });
    // }
    // debugger;
    showGeofence(bermudaTriangle, map, true);    
// });

j$('#routeGen').click(function(){
    if(org == undefined){
        org = {lat: 19.4339794, lng: -99.1553828};
    }
    if(dest == undefined){
        dest = {lat: 19.438591,lng: -99.154154};
    }
    calculateAndDisplayRoute(directionsService, directionsDisplay, org, dest);
});

// Get the modal
var modalInd = j$('#modal-Ind');
var modalCom = j$('#modal-Com');
var modalAle = j$('#modal-Ale');
var modalGeo = j$('#modal-Geo');

// Get the trigger that opens the modal
var tgrInd = j$('#Ind');
var tgrCom = j$('#Com');
var tgrAle = j$('#Ale');
var tgrGeo = j$('#Geo');

// Get the <span> element that closes the modal
var span = j$('.close');

//listeners
tgrInd.click(function() {
    openModal(modalInd);
});

tgrCom.click(function() {
    openModal(modalCom);
});

tgrAle.click(function() {
    openModal(modalAle);
});

tgrGeo.click(function() {
    openModal(modalGeo);
});

span.click(function(event) {
    // debugger;
    closeModal(modalInd);
    closeModal(modalCom);
    closeModal(modalAle);
    closeModal(modalGeo);
    // if(event.target.dataset.target == modalInd[0].Id){
    //     closeModal(modalInd);
    // }
    // if(event.target.dataset.target == +modalCom[0].Id){
    //     closeModal(modalCom);
    // }
    // if(event.target.dataset.target == +modalAle[0].Id){
    //     closeModal(modalAle);
    // }
    // if(event.target.dataset.target == +modalGeo[0].Id){
    //     closeModal(modalGeo);
    // }
});

// When the user clicks the button, open the modal 
function openModal(modal) {
    
    modal[0].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(modal) {
    
    modal[0].style.display = "none";
}

window.onclick = function(event) {
    // if (event.target == modal) {
        if(event.target == modalInd[0]){
            closeModal(modalInd);
        }
        if(event.target == modalCom[0]){
            closeModal(modalCom);
        }
        if(event.target == modalAle[0]){
            closeModal(modalAle);
        }
        if(event.target == modalGeo[0]){
            closeModal(modalGeo);
        }
    // }
}

function showGeofence(pol, map, show){
       
    // Construct the polygon.
    
    if(show){
        // Define the LatLng coordinates for the polygon's path.
        pol.setMap(map);
    }else{
        pol.setMap(null);
    }
}

function calculateAndDisplayRoute(directionsService, directionsDisplay,origin, destination) {
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: origin,          
        destination: destination,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            alert('Directions request failed due to ' + status);
        }        
    });
}