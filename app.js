const request = require('request');
const yargs = require('yargs')

const geocode = require('./geocode/geocode');

const argv = yargs
    .options({ a: { demand: true, alias: 'address', describe: 'Address to fetch weather for', string: true } })
    .help()
    .alias('help', 'h')
    .argv;  

    console.log(argv)

    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(JSON.stringify(results, undefined, 2));
        }
    });


    request({
        url: 'https://api.darksky.net/forecast/e7f5012fb3b8e7d1ad843035fd4df7ad/39.9444071,-75.1631718',
        json: true,
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to Forecast.io servers.');
        }
    })


    // e7f5012fb3b8e7d1ad843035fd4df7ad
