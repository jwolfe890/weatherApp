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

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=5685%20SE%20Lamay%20Drive',
    json: true 
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
