function openPage(urlSite, parameters){
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("POST", urlSite, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("X-Parse-Application-Id", "VnxVYV8ndyp6hE7FlPxBdXdhxTCmxX1111111");
	xmlhttp.setRequestHeader("X-Parse-REST-API-Key","6QzJ0FRSPIhXbEziFFPs7JvH1l11111111");

	parametersJSON = JSON.stringify(parameters);
	
	xmlhttp.send(parametersJSON);

	// return xmlhttp;

	return "HOla!";
	
}