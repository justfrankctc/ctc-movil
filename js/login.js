var j$ = jQuery.noConflict();

j$("#singIn").click(function(){
 	console.log('Load signIn...');
 	j$( "#content" ).load( "/../signIn.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "SignIn was loaded!" );
        }
    });
});

j$("#singUp").click(function(){
    console.log('Load signUp...');
    j$( "#content" ).load( "/../signUp.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "SignUp was loaded!" );
        }
    });
});
