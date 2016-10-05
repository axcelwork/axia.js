// $(function(){
	var axia = new Axia( {
		breakpoints: [ 480, 600, 960 ]
	} );

	axia.addEventListener( 'breakpoints', function( e ){
		console.log( e );
	} );

	// axia.removeEventListener( 'breakpoints' );
// });