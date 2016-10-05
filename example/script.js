// $(function(){
	var axia = new Axia();

	axia.addEventListener( 'breakpoints', function( e ){
		if( e == 'pc' ){
			console.log( 'PC時' );
		}
		else if( e == 'tab' ) {
			console.log( 'タブレット時' );
		}
		else if( e == 'sp' ) {
			console.log( 'スマホ時' );
		}
	} );

	// axia.removeEventListener( 'breakpoints' );
// });