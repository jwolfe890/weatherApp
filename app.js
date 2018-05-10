const yargs = require('yargs')

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({ a: { demand: true, alias: 'address', describe: 'Address to fetch weather for', string: true } })
    .help()
    .alias('help', 'h')
    .argv;  

    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
        if (errorMessage) {
            // console.log(errorMessage);
        } else {
            // console.log(JSON.stringify(results, undefined, 2));
        }
    });

    weather.getWeather(47.9999037, -122.2018825, (errorMessage, weatherResults) => {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(JSON.stringify(weatherResults, undefined, 2));
        }
    });


    

