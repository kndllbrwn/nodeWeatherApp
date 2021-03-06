const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
.options({
    a: {
        demand:true,
        alias: 'address',
        description: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.a, (errorMessage, results)=>{
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        // lng = 38.8831372;
        // lat = -76.39902276;
        weather.getWeather(results.latitude, results.longitude, (errorMessage, results)=>{
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(results, undefined, 2));
            }
        });
    }
});

