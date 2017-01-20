const request = require('request');

var getWeather = (lng, lat, callback) => {
    request({
    url:`https://api.darksky.net/forecast/d76b516fcb5c357f827e1071b9fed9fb/${lng},${lat}`,
    json:true
},(error, response, body) => {
    if (!error && response.statusCode === 200){
        callback(undefined, 
        `The temperature is currently ${body.currently.temperature}, but it feels like ${body.currently.apparentTemperature}`);
    } else if (error) {
        callback("Unable to connect to Forecast.io server");
    } else {
        console.log("Unable to fetch weather.");
    }
    });
};

module.exports.getWeather = getWeather;