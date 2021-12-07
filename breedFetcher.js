const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=sib', function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);
});
