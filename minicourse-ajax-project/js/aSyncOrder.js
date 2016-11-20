/**
 * Created by uzmasyed on 10/11/2016.
 */

var makeAsyncRequest = function(callback) {
  console.log("Using a Timeout to mimic an async request!")
  setTimeout(function() {
    console.log('Yay "request" is returned! We can use result Data in here!');
    callback();
    return 'The Data';
  }, 500);
};

var callback = function(results) {
  console.log('Callback is executing now!!'); 
};

console.log('Calling the async function! Lets start!');
var myData = makeAsyncRequest(callback);

console.log('When I try to access data here I get...', myData);
