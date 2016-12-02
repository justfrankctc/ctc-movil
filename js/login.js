var j$ = jQuery.noConflict();

j$("#singIn").click(function(){
 	console.log('Load signIn...');
 	j$( "#content" ).load(host+"/signIn.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "SignIn was loaded!" );
        }
    });
});

j$("#singUp").click(function(){
    console.log('Load signUp...');
    j$( "#content" ).load(host+"/signUp.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            alert("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "SignUp was loaded!" );
        }
    });
});
