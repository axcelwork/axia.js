var axia = new Axia( {
	breakpoints: [ 480, 600, 960 ]
} );

axia.addEventListener( 'break-point-change', function( e ){
    // Object {width: xxx, breakpoint: 960}
    // Object {width: xxx, breakpoint: 600}
    // Object {width: xxx, breakpoint: 1}
    console.log( e['breakpoint'] );
} );
