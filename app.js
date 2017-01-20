// const yargs = require('yargs');

// const geocode = require('./geocode/geocode')

// const argv = yargs
// .options({
//     a: {
//         demand:true,
//         alias: 'address',
//         description: 'Address to fetch weather for',
//         string: true
//     }
// })
// .help()
// .alias('help', 'h')
// .argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results)=>{
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

//d76b516fcb5c357f827e1071b9fed9fb

const request = require('request');

request({
    url:'https://api.darksky.net/forecast/d76b516fcb5c357f827e1071b9fed9fb/38.8831372,-76.39902276',
    json:true
},(error, response, body) => {
    if (!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    } else if (error) {
        console.log("Unable to connect to Forecast.io server");
    } else {
        console.log("Unable to fetch weather.");
    }
    });