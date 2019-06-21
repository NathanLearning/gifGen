$( document ).ready(function() {

    var noNameArray = ["rain", "cabin", "cozy", "sleep", "bonfire"]

    function showBtns() {
        $("#gifButtons").empty()
        for (var i = 0; i < noNameArray.length; i++) {
            var gifButton = $("<button>").text(noNameArray[i]).addClass("btn btn-primary, textBtn").attr("data-name", noNameArray[i])

            $("#gifButtons").append(gifButton)
        }
    }
    
    function addBtn() {
        $("#addGif").on("click", function() {
        var textBtn = $("#ma-input").val().trim()

        if (textBtn == "") {
          return false
        }
        noNameArray.push(textBtn)
        showBtns()
          return false
        })
    }

    function displayGifs() {
        var textBtn = $(this).attr("data-name")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + textBtn + "&api_key=HYxhLRCnPTlHUI0APYTYCop4eaL3qj5D&limit=10"

        $.ajax({
            url: queryURL,
            method: 'GET'
        })

        .done(function(response) {

            $("#images").empty();
            var results = response.data 

            for (var i=0; i<results.length; i++) {
                var gifDiv = $("<div>")
                gifDiv.addClass("gifDiv")
                
                var gifRating = $("<p>").text("Rating: " + results[i].rating)
                gifDiv.append(gifRating)
               
                var gifImage = $("<img>").attr("src", results[i].images.fixed_height_small_still.url).attr("data-still",results[i].images.fixed_height_small_still.url).attr("data-animate",results[i].images.fixed_height_small.url).attr("data-state", "still").addClass("image")
                gifDiv.append(gifImage)
    
                $("#images").prepend(gifDiv)
            }
        })
    }
    
    showBtns()
    addBtn()
    
    $(document).on("click", ".textBtn", displayGifs)
    $(document).on("click", ".image", function() {
        var state = $(this).attr('data-state')

        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'))
            $(this).attr('data-state', 'animate')
        } else {
            $(this).attr('src', $(this).data('still'))
            $(this).attr('data-state', 'still')
        }
    })
    })
    