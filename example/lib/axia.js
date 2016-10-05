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

	this.defaults = {
		breakpoints: [ 600, 960 ]
	};
	
	window.addEventListener( 'load', resizeHandler );
	window.addEventListener( 'resize', resizeHandler );

	_.ua_status = '';
	var bp_event = new Event( 'breakpoints' );
	
	function resizeHandler(){
		if ( window.matchMedia( '(max-width:599px)' ).matches ) {
			if( _.ua_status != 'sp' ) _.dispatchEvent( bp_event, 'sp' );
			_.ua_status = 'sp';
		}
		else if ( window.matchMedia( '(min-width:600px) and (max-width:959px)' ).matches ) {
			if( _.ua_status != 'tab' ) _.dispatchEvent( bp_event, 'tab' );
			_.ua_status = 'tab';
		}
		else {
			if( _.ua_status != 'pc' ) _.dispatchEvent( bp_event, 'pc' );
			_.ua_status = 'pc';
		}
	}

	this.dispatchEvent = function( e, data ){
		var observers = _.listeners[ e.type ] || '';
		if( observers != '' ){
			for( var i = 0; i < observers.length; ++i ){
				observers[ i ]( data );
			}
		}
	}
};


Axia.prototype.addEventListener = function( state, callback, isCapture ) {
	if( !this.listeners[ state ] ) this.listeners[ state ] = [];
	this.listeners[ state ].push( callback );
};
Axia.prototype.removeEventListener = function( state, callback ){
	// console.log( callback );
	if( !this.listeners[ state ] ) return;
	this.listeners[ state ] = null;
}
