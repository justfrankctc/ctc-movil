function send() {
	var user = jQuery('#in_user').val();
	var pass = jQuery('#in_pass').val();
	validateLogin(user, pass);
}

function validateLogin(user, pass){

	xmlhttp = new XMLHttpRequest();
	
	var url = "http://192.168.1.33:8080/ctc.traccar.web/login.htm";

	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("X-Parse-Application-Id", "VnxVYV8ndyp6hE7FlPxBdXdhxTCmxX1111111");
	xmlhttp.setRequestHeader("X-Parse-REST-API-Key","6QzJ0FRSPIhXbEziFFPs7JvH1l11111111");

	xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        // alert(xmlhttp.responseText);
	        alert('Login exitoso!');
	        console.log('Login exitoso!');
	    } else{
	    	alert('Serivicio no disponible, intentalo más tarde');
	    	console.log('Estatus de la peticion: '+xmlhttp.status);
	    	console.log('Result: '+xmlhttp.responseText);
	    }	
	}
	var parameters = {
	    "email": user,
	    "password": pass
	};

	var parametersJSON = JSON.stringify(parameters);
	
	xmlhttp.send(parametersJSON);
	

}