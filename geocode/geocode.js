const request = require('request');

var geocodeAddress = (userInput, callback) => {
    
    fetch = encodeURIComponent(userInput);

    request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${fetch}`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address.')
    } else if (body.status === 'OK') {
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
    }
});
};

module.exports.geocodeAddress = geocodeAddress;