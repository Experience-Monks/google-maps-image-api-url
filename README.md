# google-maps-image-api

**Allows you to easily get Google Maps Image API urls.**

Google Maps Image API allows you to get static images of a 2d map or streetview. This module will return the url of such an image. The options correlate to those in the API.

## usage

```js
const image = require('google-maps-image-api')
image(opts) // -> url
```

## static maps

### required parameters

```javascript
{
	type: 'staticmap',
	center: '40.714728,-73.998672' // can also be a street address
}
```

### optional parameters

```javascript
{
	key: '<your api key>', // your Google API Key
	zoom: 14, // 0 = entire world, 21 = streets
	size: '320x240', // size of the image
	scale: 1, // for retina screens this should be 2
	format: 'JPEG', // or 'PNG' or 'GIF'
	maptype: 'roadmap', // or 'satellite' or 'hybrid' or 'terrain'
	language: 'en', // language of the map

 	region: 'us', // country code in ccTLD
 	// defines the appropriate borders to display, based on geo-political sensitivities

	markers: 'color:blue|label:S|11211|11206|11222', // add markers to the map
	// see https://developers.google.com/maps/documentation/staticmaps/index#Markers

	path: 'color:0x0000ff|weight:5|40.737102,-73.990318|40.749825,-73.987963',
	// Add a path to the map. A path can be filled or just a line.
	// see https://developers.google.com/maps/documentation/staticmaps/index#Paths

	visible: 'Toronto', // a location that should be visible
	// This can be either long,lat or a location name.

	style: 'feature:administrative|element:labels|weight:3.9|visibility:on|inverse_lightness:true',
	// how features are rendered eg. roads, parks, etc.
	// see https://developers.google.com/maps/documentation/staticmaps/index#StyledMaps
}
```

## streetview pictures

### required parameters

```javascript
{
	type: 'streetview',
	// You must define either location or pano.
	location: 'Toronto', // location name or long,lat
	pano: '<pano id>', // id of a specific panorama
}
```

### optional parameters

```javascript
{
	key: '<your api key>', // your Google API key
	size: '320x240', // size of the image
	heading: 45, // bearing (direction) of the camera. 0 - 360. 0 == North
	fov: 90, // field of view in degrees.
	pitch: 0, // up/down angle of the camera. 90 = straight up. -90 = straight down
}
```
