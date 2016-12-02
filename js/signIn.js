j$('#error').hide();
div_err_user = j$('#err_in_user');
div_err_pass = j$('#err_in_pass');

div_err_user.hide();
div_err_pass.hide();

j$('#in_user').focusout(function(){
	 validaVacio(j$('#in_user').val(), div_err_user);
});

j$('#in_pass').focusout(function(){
	 validaVacio(j$('#in_pass').val(), div_err_pass);
});

j$('#send').click(function() {
	user = j$('#in_user').val();
	pass = j$('#in_pass').val();
	parameters = {
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
	        urlMap = "http://192.168.1.40:3000/testMapa.html";
	        window.open(urlMap);
	        
	    } else{
	    	errorContainer.show();
	    	errorContainer.text('Serivicio no disponible, intentalo más tarde');
	    	console.log('Estatus de la peticion: '+xmlhttp.status);
	    	console.log('Result: '+xmlhttp.responseText);
	    }	
	}
	
	var parametersJSON = JSON.stringify(parameters);
	console.log('Sending data...');
	
	var userValido = validaVacio(user, div_err_user);
	var passValido = validaVacio(pass, div_err_pass);
	var lat = "19.438591"; 
	var long = "-99.154154"
	if(userValido && passValido){
		urlMap = host+"/Map.html?&lat="+lat+"&long="+long;
		// cordova.InAppBrowser.open;
		// window.open(urlMap, "_self");
		var options = 'toolbar=no,location=no,disallowoverscroll=no';		

		var ref = cordova.InAppBrowser.open(urlMap, '_blank', options);
		// xmlhttp.send(parametersJSON);
	}

});

j$("#back").click(function(){
    console.log('Going back to login...');
    j$( ".container" ).load(host+"/login.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "We're in Login, again!" );
        }
    });
}); // fin document.ready

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