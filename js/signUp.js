var j$ = jQuery.noConflict();

j$('#error').hide();

j$('#send').click(function() {
	name = j$('#in_name').val();
	email = j$('#in_email').val();
	pass = j$('#in_pass').val();
	parameters = {
		"name": name,
	    "email": user,
	    "password": pass
	};

	urlSite ="http://192.168.1.33:8080/ctc.traccar.web/login.htm";
	errorContainer = j$('#error');


	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("POST", urlSite, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("X-Parse-Application-Id", "VnxVYV8ndyp6hE7FlPxBdXdhxTCmxX1111111");
	xmlhttp.setRequestHeader("X-Parse-REST-API-Key","6QzJ0FRSPIhXbEziFFPs7JvH1l11111111");

	xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
		console.log('Data sent!');
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        // alert(xmlhttp.responseText);
	        alert('Login exitoso!');
	        console.log('Login exitoso!');
	    } else{
	    	errorContainer.show();
	    	errorContainer.text('Serivicio no disponible, intentalo más tarde');
	    	console.log('Estatus de la peticion: '+xmlhttp.status);
	    	console.log('Result: '+xmlhttp.responseText);
	    }	
	}
	
	var parametersJSON = JSON.stringify(parameters);
	console.log('Sending data...');
	debugger;
	xmlhttp.send(parametersJSON);

});

j$("#back").click(function(){
    console.log('Going back to login...');
    j$( ".container" ).load( "/../login.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "We're in Login, again!" );
        }
    });
});