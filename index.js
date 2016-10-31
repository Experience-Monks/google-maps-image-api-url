/** @module google-maps-image-api */
'use strict'

const querystring = require( 'querystring' );

const BASE_URL = 'https://maps.googleapis.com/maps/api/';

module.exports = function( opts ) {

	const zoom = typeof opts.zoom === 'number' ? opt.zoom : 14;
	const size = opts.size || '320x240';

	if( opts.type == 'staticmap' ) {

		if( opts.center === undefined ) {

			throw new Error( 'center must be defined in options' );
			return;
		} else if( opts.type === undefined ) {

			throw new Error( 'type must be defined in options' );
			return;
		}
	} else if( opts.type == 'streetview' ) {

		if( opts.location === undefined && opts.pano === undefined ) {

			throw new Error( 'you must pass in location in options' );
			return;
		}
	} else {

		throw new Error( opts.type + ' is an invalid type. Use "staticmap" or "streetview".' );
		return;
	}

	return BASE_URL + opts.type + '?' + querystring.stringify( opts );
};
