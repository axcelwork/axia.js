/*
axia.js
version 0.1

Creates handy events for your responsive design breakpoints

Copyright (c) 2016 axcelwork
axcelwork@gmail.com

Documentation for this plugin lives here:
https://github.com/axcelwork/axia.js

Released under the MIT license
http://www.opensource.org/licenses/mit-license.php
*/
var Axia = function( options ) {
	var _ = this;
	_.listeners = [];
	_.settings = {};

	this.defaults = {
		breakpoints: [ 600, 960 ]
	};

	_.settings.breakpoints = options.breakpoints || this.defaults.breakpoints;

	
	window.addEventListener( 'load', resizeHandler );
	window.addEventListener( 'resize', resizeHandler );

	_.ua_status = '';
	var bp_event = new Event( 'breakpoints' );
	
	function resizeHandler(){

		if ( window.matchMedia( '(max-width: ' + ( _.settings.breakpoints[ 0 ] - 1 ) + 'px)' ).matches ) {
			if( _.ua_status != 'bp' + ( _.settings.breakpoints[ 0 ] - 1 ) ) _.dispatchEvent( bp_event, 'bp' + ( _.settings.breakpoints[ 0 ] - 1 ) );
			_.ua_status = 'bp' + ( _.settings.breakpoints[ 0 ] - 1 );
		}
		
		_.settings.breakpoints.some( function( val, index ){
			if ( window.matchMedia( '(min-width: ' + _.settings.breakpoints[ index ] + 'px) and (max-width: ' +  _.settings.breakpoints[ index + 1 ] + 'px)' ).matches ) {
				if( _.ua_status != 'bp' + _.settings.breakpoints[ index ] ) _.dispatchEvent( bp_event, 'bp' + _.settings.breakpoints[ index ] + ' - ' + _.settings.breakpoints[ index + 1 ] );
				_.ua_status = 'bp' + _.settings.breakpoints[ index ];
			}
		});

		if ( window.matchMedia( '(min-width:' + _.settings.breakpoints[ _.settings.breakpoints.length - 1 ] + 'px)' ).matches ) {
			if( _.ua_status != 'bp' + ( _.settings.breakpoints[ _.settings.breakpoints.length - 1 ] ) ) _.dispatchEvent( bp_event, 'bp' + ( _.settings.breakpoints[ _.settings.breakpoints.length - 1 ] ) );
			_.ua_status = 'bp' + ( _.settings.breakpoints[ _.settings.breakpoints.length - 1 ] );
		}
	};

	this.dispatchEvent = function( e, data ){
		var observers = _.listeners[ e.type ] || '';
		if( observers != '' ){
			for( var i = 0; i < observers.length; ++i ){
				observers[ i ]( data );
			}
		}
	};
};


Axia.prototype.addEventListener = function( state, callback, isCapture ) {
	if( !this.listeners[ state ] ) this.listeners[ state ] = [];
	this.listeners[ state ].push( callback );
};
Axia.prototype.removeEventListener = function( state ){
	if( !this.listeners[ state ] ) return;
	this.listeners[ state ] = null;
}
