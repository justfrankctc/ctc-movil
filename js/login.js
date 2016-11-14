var j$ = jQuery.noConflict();

function send() {
	user = j$('#in_user').val();
	pass = j$('#in_pass').val();
	parameters = {
	    "email": user,
	    "password": pass
	};

	urlSite ="http://192.168.1.33:8080/ctc.traccar.web/login.htm";
	container = j$('.container');


	result = openPage(urlSite, container, parameters);

	if (result.readyState == 4 && result.status == 200) {
	    console.log('Login exitoso!');
	} else{
		alert('Serivicio no disponible, intentalo más tarde');
		console.log('Estatus de la peticion: '+result.status);
		console.log('Result: '+result.responseText);
	}	

}