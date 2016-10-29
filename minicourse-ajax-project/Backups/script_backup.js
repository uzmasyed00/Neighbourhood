
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var neighbourhood = $('#city').val()
    console.log("neighbourhood is" + neighbourhood);

    //Send a request to get a map of the city
    var nytimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + neighbourhood + '&sort=newest&api-key=be67cb723daf42fb9cb7741b72018289'

    //var nytimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sydney&sort=newest&api-key=be67cb723daf42fb9cb7741b72018289'
    // YOUR CODE GOES HERE!
    // YOUR CODE GOES HERE!
    $.getJSON(nytimesUrl, function (data) {
        console.log(data.response.docs)
    });
    return false;
};

$('#form-container').submit(loadData);

//console.log(neighbourhood)
//console.log(city)