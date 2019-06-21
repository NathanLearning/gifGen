$(document).ready(function() {
    var topics = ["star wars", "wholesome", "rain", "unexpected", "coding"]
})

for (var i = 0; i < topics.length; i++) {
	printButton(topics[i])
}

$('#newBtn').on('click', function() {
    
})


var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=HYxhLRCnPTlHUI0APYTYCop4eaL3qj5D&tag="

$("#starWars").on("click", function() {
    $(topics[0]).appendTo(queryURL)
    console.log(queryURL)
})