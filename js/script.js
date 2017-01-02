/**
 * Created by uzmasyed on 1/01/2017.
 */

/**
 * Generates a random number and returns it as a string for OAuthentication
 * @return {string}
 */
function nonce_generate() {
    console.log("I am in nonce_generate")
  return (Math.floor(Math.random() * 1e12).toString());
}



//var yelp_url = 'https://api.yelp.com/v2/search?' + 'term=Medina&location=Kitsilano'
var yelp_url = 'https://api.yelp.com/v2/search?'
var  YELP_KEY_SECRET = 'rML1MhFwm6phKTKPrwpSbnZ8fss';
var YELP_TOKEN_SECRET = 'ej_V-eaYPaAfXblnM9OshO8erRE';

    var parameters = {
      oauth_consumer_key: 'LyqBJtKrt97LVQH8YOXmXA',
      oauth_token: 'h6sr0yfugN7NAU7X8fE-PMfAi5bOyYut',
      oauth_nonce: nonce_generate(),
      oauth_timestamp: Math.floor(Date.now()/1000),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version : '1.0',
      callback: 'cb',
        term : 'Medina',
        location :'Kitsilano'
    };

    var encodedSignature = oauthSignature.generate('GET',yelp_url, parameters, YELP_KEY_SECRET, YELP_TOKEN_SECRET);
    parameters.oauth_signature = encodedSignature;

    var settings = {
      url: yelp_url,
      data: parameters,
      cache: true,
      dataType: 'jsonp',
      success: function(results) {
        // Do stuff with results
          console.log("I have received results successfully")
          console.log("result received is" + results.businesses[0].snippet_text);
      },
      fail: function() {
        // Do stuff on fail
          console.log("There was an issue receiving successful results")
      }
    };

    // Send AJAX query via jQuery library.
    $.ajax(settings);
