const http = require('http');
// API URL
var url = 'http://api.weatherapi.com/v1/current.json?';
var key = '71cec789fe974fb5b09122723201912';
var city = 'WASHINGTON DC';
var port = 3000;


// CREATE A SERVER
const server = http.createServer(function(request,response){
    // Try to get a response from the server 
        //response.write('Hi');

    // print the app link on the console
        
    
    // get the data from the URL
        // import the request module to make a request to the server
        var request = require('request');
        // request takes a parameter as URL and gives back a function with below parameters
        // body contains the exact data

        // create the url you are going to pass
        url = url + 'key=' + key + '&q=' + city
        request(url, function(err, res, body){
            //console.log(body);
            //response.write(body);
            // parse the JSON format in a variable to be used to get the required data
            var weatherData = JSON.parse(body);
            response.write("<html> <body> <div id = 'container'>\
                        <h2> The wind speed at " + weatherData.location['name'] + " at "
                        + weatherData.location['localtime'] 
                           + " is " + weatherData.current['wind_kph'] 
                            + " km per hour and the weather condition is " 
                            + weatherData.current.condition.text +
                "</h2></div></body></html>"
                            )
            response.end();
        });

        
        
}
// THE SERVER LISTENS TO THE INCOMING REQUESTS AT PORT: 3000
).listen(port);

console.log('Please go to the below link to get the weather report for ' + city);
console.log('localhost:' + port);