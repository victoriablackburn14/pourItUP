$(document).ready(function(){

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rapidapi.p.rapidapi.com/list.php?a=list",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "60ca5c405cmsha8924cbbd9a5b7ep1ee964jsn614923e7e58f"
        }
    };
    
    

function runThePage() {
	settings.url = "https://rapidapi.p.rapidapi.com/list.php?a=list",
	$.ajax(settings).done(function (response) {

        // Response data
        console.log(response)
        console.log("connected to API")
    });   
}    
runThePage()
});
