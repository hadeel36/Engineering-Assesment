var express = require('express');
var router = express.Router();
var https = require('https');

var data;
var request = require('request');
request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body.toString()); // Print the HTML for the Google homepage.
  data = body.toString();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', data: data });
});

module.exports = router;
