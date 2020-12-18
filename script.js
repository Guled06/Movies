
        // Initial array of movies
        var movies = [
          "The Lion King",
          "Home Alone",
          "Avengers Endgame",
          "Get Out",
        ];
        // displayMovieInfo function re-renders the HTML to display the appropriate content
        function displayMovieInfo() {
          var movie = $(this).attr("data-name");
          var queryURL =
            "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURL,
            method: "GET",
          }).then(function (response) {
            console.log(response);
            // Creates a div to hold the movie
            var movieHold = $("<div>");
            // Retrieves the Rating Data
              var rating = response.Rated
            // Creates an element to have the rating displayed
            var ratingP = $("<p>").text("Rating: " + rating);
            // Displays the rating
            movieHold.append(ratingP);
            // Retrieves the release year
            var year = response.Year
            // Creates an element to hold the release year
            var yearP = $("<p>").text("Year: " + year);
            // Displays the release year
            movieHold.append(yearP);
            // Retrieves the plot
            var plot = response.Plot
            // Creates an element to hold the plot
            var plotP = $("<p>").text("Plot: " + plot);
            // Appends the plot
            movieHold.append(plotP);
            // Creates an element to hold the image
            var image = response.Poster
            var imgP = $("<img>").attr("src", response.Poster);
            // Appends the image
            movieHold.append(imgP);
            // Puts the entire Movie above the previous movies.
            $("#movies-view").prepend(movieHold);
          });
        }
        // Function for displaying movie data
        function renderButtons() {
          // Deletes the movies prior to adding new movies
          // (this is necessary otherwise you will have repeat buttons)
          $("#buttons-view").empty();
          // Loops through the array of movies
          for (var i = 0; i < movies.length; i++) {
            // Then dynamicaly generates buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adds a class of movie to our button
            a.addClass("movie");
            // Added a data-attribute
            a.attr("data-name", movies[i]);
            // Provided the initial button text
            a.text(movies[i]);
            // Added the button to the buttons-view div
            $("#buttons-view").append(a);
          }
        }
        // This function handles events where the add movie button is clicked
        $("#add-movie").on("click", function (event) {
          event.preventDefault();
          // This line of code will grab the input from the textbox
          var movie = $("#movie-input").val().trim();
          // The movie from the textbox is then added to our array
          movies.push(movie);
          // Calling renderButtons which handles the processing of our movie array
          renderButtons();
        });
        // Adding click event listeners to all elements with a class of "movie"
        $(document).on("click", ".movie", displayMovieInfo);
        // Calling the renderButtons function to display the initial buttons
        renderButtons();

