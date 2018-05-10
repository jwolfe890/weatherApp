const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e7f5012fb3b8e7d1ad843035fd4df7ad/${latitude},${longitude}`,
        json: true,
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
           callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature 
            });
        } else {
            callback('Unable to fetch weather', );
        }
    });
}

module.exports = {
    getWeather
};

