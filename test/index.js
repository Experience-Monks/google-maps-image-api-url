'use strict'

const assert = require( 'assert' );
const imageAPI = require( '..' );

assert.strictEqual( imageAPI( {

	type: 'staticmap',
	center: '43.653226,-79.3831843',
	style: 'feature:landscape|hue:0xFF00FF|saturation:100|lightness:-50'
}), `\
https://maps.googleapis.com/maps/api/staticmap?type=staticmap\
&center=43.653226%2C-79.3831843&style=feature%3Alandscape\
%7Chue%3A0xFF00FF%7Csaturation%3A100%7Clightness%3A-50` );

assert.strictEqual( imageAPI( {

	type: 'streetview',
	location: 'Bay Street, Toronto'
}), `\
https://maps.googleapis.com/maps/api/streetview?type=streetview\
&location=Bay%20Street%2C%20Toronto` );
