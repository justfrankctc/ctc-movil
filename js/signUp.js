var j$ = jQuery.noConflict();

err_div_name = j$('#err_in_name');
err_div_email = j$('#err_in_email');
err_div_pass = j$('#err_in_pass');
err_div_pass_conf = j$('#err_in_pass_conf');

j$('#error').hide();

err_div_name.hide();
err_div_email.hide();
err_div_pass.hide();
err_div_pass_conf.hide();

j$('#in_name').focusout(function(){
	 validaVacio(j$('#in_name').val(), err_div_name);
});

j$('#in_email').focusout(function(){
	 validaVacio(j$('#in_email').val(), err_div_email);
});

j$('#in_pass').focusout(function(){
	 validaVacio(j$('#in_pass').val(), err_div_pass);
});

j$('#in_pass_conf').focusout(function(){
	 if(validaVacio(j$('#in_pass_conf').val(), err_div_pass_conf)){
	 	coincide(j$('#in_pass').val(), j$('#in_pass_conf').val());
	 }

});

j$('#send').click(function() {

	name = j$('#in_name').val();
	email = j$('#in_email').val();
	pass = j$('#in_pass').val();
	passConf = j$('#in_pass_conf').val();

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
	var emailValido = validaVacio(email, err_div_email); 
	var passValido = validaVacio(pass, err_div_pass); 
	var passConfValido = validaVacio(passConf, err_div_pass_conf);

	if(nameValido && emailValido && passValido && passConfValido){		
		if(coincide(pass, passConf)){
			console.log('Sending data...');	
			
			j$( ".container" ).load(host+"/addDevice.html", function(response, status, xhr ) {
			    if ( status == "error" ) {
			        console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
			    } else {
			       console.log('add a new Device!');
			    }
			});

		}
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
});

function coincide(campo1, campo2){
	var coincidenCampos = true;
	if(campo1 === campo2){
		err_div_pass_conf.hide();
	} else {
		err_div_pass_conf.text('La confirmacion de contraseña no coincide');
		err_div_pass_conf.show();
		coincidenCampos = false;
	}
	return coincidenCampos;
}

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