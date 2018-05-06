const request = require('request');
const yargs = require('yargs')

const argv = yargs
    .options({
       a: {
           demand: true,
           alias: 'address',
           describe: 'Address to fetch weather for',
           string: true   
       }
    })
    .help()
    .alias('help', 'h')
    .argv;  

let encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true 
}, (error, response, body) => {

    if (error) {
        return console.log('Unable to connect to Google servers.')
    } else if (body.status === 'ZERO_RESULTS') {
        return console.log('Unable to find that address.');
    } else if (!body.results[0]) {
      return console.log(body.status)
    }

    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});


