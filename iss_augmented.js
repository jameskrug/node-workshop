var request = require("request");
var prompt = require("prompt");

var place = "";
var position = {};
var request = require("request");
var cityData = {};
var cityLocation = {};

request("http://api.open-notify.org/iss-now.json", function(err,data){
    if (err){
        console.log("an error happend");
    }
    else{
        position = JSON.parse(data.body);
    }
});


prompt.get("Select city: ", function(err,userInput){
    if (err){
        console.log("bad stuff happened");
    }
    else{
        place = userInput["Select city: "];
    }
    console.log("the place is:" + place);
    request("https://maps.googleapis.com/maps/api/geocode/json?address=" + place, function(err, data){
        if (err){
            console.log("broken");
        }
        else{
            cityData = JSON.parse(data.body);
            cityLocation = cityData.results[0].geometry.location;
            console.log(cityData.results[0].geometry.location);
        }
        // console.log(cityLocation)
        // console.log("The ISS is at: " + position.iss_position.latitude);
        // console.log("Your city is at: " + cityData.results[0].geometry.location.lat);
        
        var R = 6371e3; // metres
        var φ1 = parseInt(position.iss_position.latitude)*Math.PI/180;
        var φ2 = parseInt(cityData.results[0].geometry.location.lat)*Math.PI/180;
        var Δφ = (parseInt(cityData.results[0].geometry.location.lat)-parseInt(position.iss_position.latitude))*Math.PI/180;
        var Δλ = (parseInt(cityData.results[0].geometry.location.lng)-parseInt(position.iss_position.longitude))*Math.PI/180;

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var d = R * c;
        console.log(d.toFixed()/1000 + "km");
    });

});


