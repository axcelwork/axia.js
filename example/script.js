var axia = new Axia( {
	breakpoints: [ 480, 600, 960 ]
} );

axia.addEventListener( 'break-point-change', function( e ){
	console.log( e );
} );

axia.addEventListener( '960', function( e ){
	console.log( e );
} );

axia.addEventListener( '600', function( e ){
	console.log( e );
} );

axia.addEventListener( '480', function( e ){
	console.log( e );
} );

axia.addEventListener( '1', function( e ){
	console.log( e );
} );
