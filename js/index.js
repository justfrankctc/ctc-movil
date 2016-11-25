document.addEventListener("deviceready", onDeviceReady, false);

var j$ = jQuery.noConflict();

function onDeviceReady() {
    alert("Device is Ready");
    console.log("Device is Ready");
    
    j$( ".container" ).load( "login.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
            console.log( "Login was loaded!" );
        }
    });
}