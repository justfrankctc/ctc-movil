var j$ = jQuery.noConflict();

err_div_name = j$('#err_in_name');
err_div_identifier = j$('#err_in_identifier');



j$('#error').hide();

err_div_name.hide();
err_div_identifier.hide();



j$('#in_name').focusout(function(){
	 validaVacio(j$('#in_name').val(), err_div_name);
});

j$('#in_identifier').focusout(function(){
	 validaVacio(j$('#in_identifier').val(), err_div_identifier);
});


j$('#addDevice').click(function() {

	name = j$('#in_name').val();
	identifier = j$('#in_identifier').val();

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
	
	
	
	var nameValido = validaVacio(name, err_div_name); 
	var identifierValido = validaVacio(identifier, err_div_identifier); 
	
	if(nameValido && identifierValido){		
		
			console.log('Sending data...');	
			
			j$( ".container" ).load( "http://192.168.1.40:3000/addDevice.html", function(response, status, xhr ) {
			    if ( status == "error" ) {
			        console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
			    } else {
			       console.log('add a new Device!');
			    }
			});

		
	}
});

j$("#back").click(function(){
    console.log('Going back to login...');
    j$( ".container" ).load( "http://192.168.1.40:3000/login.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "We're in Login, again!" );
        }
    });
});


function validaVacio(campo, err_div){
	var valido = true;

	if(campo === undefined || campo == ""){
		err_div.text('El campo no puede estar vacio');
		err_div.show();
		valido = false;
	} else{
		err_div.hide();
	}

	return valido;
}