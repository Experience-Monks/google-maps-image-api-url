var imageAPI = require( '../' );

console.log( imageAPI( {

	type: 'staticmap',
	center: '43.653226,-79.3831843',
	style: 'feature:landscape|hue:0xFF00FF|saturation:100|lightness:-50'
}) );

console.log( imageAPI( {

	type: 'streetview',
	location: 'Bay Street, Toronto'
}));