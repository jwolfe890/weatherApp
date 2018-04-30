const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=5685%20SE%20Lamay%20Drive',
    json: true 
}, (error, response, body) => {
    console.log(body);
});
