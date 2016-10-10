var request = require("request");


request("http://api.open-notify.org/iss-now.json", function(err,data){
    if (err){
        console.log("an error happend");
    }
    else{
        var position = JSON.parse(data.body);

        console.log(position.iss_position.latitude.toFixed(2));
        console.log(position.iss_position.longitude.toFixed(2));
    }
});