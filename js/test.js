document.addEventListener("deviceready", onDeviceReady, false);

var j$ = jQuery.noConflict();

function onDeviceReady() {
    // alert("Device is Ready");
    console.log("Device is Ready");
    
    j$('.panel-heading').click(function(event){
    	debugger;
    });
}