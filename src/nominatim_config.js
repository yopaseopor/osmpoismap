/**
 * Nominatim Searcher Configuration
 */
var nominatimConfig = {
	url: 'https://nominatim.openstreetmap.org/search',
	params: {
		format: 'json',
		limit: 10,
		addressdetails: 1,
		'accept-language': 'en'
	},
	attribution: 'Search by <a href="https://nominatim.openstreetmap.org/" target="_blank">Nominatim</a>'
}; 