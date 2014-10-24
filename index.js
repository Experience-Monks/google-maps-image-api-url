/** @module google-maps-image-api */

var querystring = require( 'querystring' );

/**
 * Allows you to easily get Google Maps Image API urls.
 *
 * Google Maps Image API allows you to get static images of a 2d map or streetview.
 *
 * This module will return a string which is a url you can load an image from.
 *
 * Options passed in correlate to properties you can pass to Google Maps Image API.
 *
 * Here are parameter's you can pass through opts to get a url:
 *
 * ```javascript
 * {
 * 	//// REQUIRED ////
 * 	type: 'staticmap', // This value is required if you want to render a static map
 * 	
 * 	center: '40.714728,-73.998672', // This will be the center of your image. 
 * 									// It can also be a street address
 *  
 *
 * 	
 *	//// OPTIONAL ////
 * 	key: 'your api key', // Your Google API Key
 * 
 * 	zoom: 14, // This will be how zoomed in the map will be. 0 is where you 
 *  		  // can see the entire world, 21 is where you see streets. 14 is default
 *  		  
 * 	size: '320x240', // This is the pixel size of your map. Default 320x240
 * 	
 * 	scale: 1, // This property is meant for rendering maps with high pixel 
 * 			  // resolutions eg. iphone 4+ is retina this value should be set to 2
 *
 *	format: 'JPEG', // Possible valuse 'PNG', 'GIF', 'JPEG',
 *
 * 	maptype: 'roadmap', // What type of map you want to render 
 * 						// 'roadmap', 'satellite', 'hybrid', and 'terrain'
 *
 * 	language: 'en', // Language in which you want the map to be rendered
 *
 *  region: 'us', // Country code in: ccTLD. defines the appropriate borders to display, 
 *  			  // based on geo-political sensitivities
 *
 *	markers: 'color:blue|label:S|11211|11206|11222',
 *	// Add markers to the map. For docs:
 * 	// https://developers.google.com/maps/documentation/staticmaps/index#Markers
 *
 * 	path: 'color:0x0000ff|weight:5|40.737102,-73.990318|40.749825,-73.987963',
 * 	// Add a path to the map. A path can be filled or just a line. For docs:
 * 	// https://developers.google.com/maps/documentation/staticmaps/index#Paths
 *
 * 	visible: 'Toronto', // you can specify locations that should be visible on the 
 * 				 		// rendered map. This can be either long,lat or a location name
 *
 * 	style: 'feature:administrative|element:labels|weight:3.9|visibility:on|inverse_lightness:true', 
 * 	// this property will change how features are rendered eg. roads, parks, etc.
 * 	// For docs:
 * 	// https://developers.google.com/maps/documentation/staticmaps/index#StyledMaps
 * }
 * ```
 * 
 * Here are the parameters you'd pass in to render a streetview:
 * ```javascript
 * {
 * 	//// REQUIRED ////
 * 	type: 'streetview',
 * 	location: 'Toronto', // Location name or long,lat. 
 * 						 // if you ommit location you must define pano
 * 	pano: 'pano id', // An id for a specific panorama. If you omit 
 * 					 // you must define a location
 *
 * 	//// OPTIONAL ////
 * 	key: 'your api key', // Your Google API Key
 * 	
 * 	size: '320x240', // The size of your render in pixels
 *
 * 	heading: 45, // This is the compass heading which the camera is pointing at
 * 				 // between 0 and 360. 0 == North
 *
 * 	fov: 90, // field of view expressed in degrees. (angle which determines how much you see)
 * 			 // default is 90
 *
 * 	pitch: 0, // up down angle the camera is pointing at. 90 is straight up and -90 is straight down
 * }
 * ```
 * 
 * @param  {Object} opts These are options that will be used to render streetview and map images
 * @return {String} A url which can be used to load an image
 */

var BASE_URL = 'https://maps.googleapis.com/maps/api/';

module.exports = function( opts ) {

	opts.zoom = opts.zoom === undefined ? 14 : opts.zoom;
	opts.size = opts.size || '320x240';

	if( opts.type == 'staticmap' ) {

		if( opts.center === undefined ) {

			doErr( 'center must be defined in options' );
			return;
		} else if( opts.type === undefined ) {

			doErr( 'type must be defined in options' );
			return;
		}
	} else if( opts.type == 'streetview' ) {

		if( opts.location === undefined && opts.pano === undefined ) {

			doErr( 'you must pass in location in options' );
			return;
		}
	} else {

		doErr( opts.type + ' is an invalid type. You should use "staticmap" or "streetview"' );
		return;
	}

	var type, pathStr;

	type = opts.type;
	delete opts.type;

	return BASE_URL + type + '?' + querystring.stringify( opts );
};

function doErr( msg ) {

	throw new Error( msg );
}