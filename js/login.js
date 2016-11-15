var j$ = jQuery.noConflict();

j$("#singIn").click(function(){
 	console.log('Load signIn...');
 	j$( "#content" ).load( "http://192.168.1.40:3000/signIn.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            console.log("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "SignIn was loaded!" );
        }
    });
});

j$("#singUp").click(function(){
    console.log('Load signUp...');
    j$( "#content" ).load( "http://192.168.1.40:3000/signUp.html", function(response, status, xhr ) {
        if ( status == "error" ) {
            alert("Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        } else {
           console.log( "SignUp was loaded!" );
        }
    });
});
