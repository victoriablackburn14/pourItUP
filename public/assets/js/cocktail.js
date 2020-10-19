$(document).ready(function(){

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/locations/search?query=new%20york&locale=en_US",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "hotels4.p.rapidapi.com",
            "x-rapidapi-key": "60ca5c405cmsha8924cbbd9a5b7ep1ee964jsn614923e7e58f"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    

function runThePage() {
	settings.url = "https://rapidapi.p.rapidapi.com/locations/search?query=new%20york&locale=en_US",
	$.ajax(settings).done(function (response) {

        // Response data
        console.log(response)
        console.log("connected to API")
    });   
}    
runThePage()
});
