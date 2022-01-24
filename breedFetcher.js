const request = require('request');


const fetchBreedDescription = function (breedName, callback) {


  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {

    if (error) {//error from the request call
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data) {// check if we recieve any data 
      return callback(null, data[0].description);
    } else {
      return callback('No description for this cat breed', null);
    }

  });

};

module.exports = {
  fetchBreedDescription,
}