
        // Initial array of movies
        var movies = [
          "Toy Story",
          "Home Alone",
          "The Best of Me",
          "Message In A Bottle",
          "The Big Green",
          "Titanic",
          "A Kid In Aladdin's Palace"
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

            var title = response.Title

            var titleP = $("<p>").text("Title: " + title);

            movieHold.append(titleP);

            var actor = response.Actors

            var actorP = $("<p>").text("Actors: " + actor);

            movieHold.append(actorP);

            var director = response.Director

            var directorP = $("<p>").text("Director: " + director);

            movieHold.append(directorP);

            var country = response.Country

            var countryP = $("<p>").text("Country: " + country);

            movieHold.append(countryP);
          
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
        
    
        $(".Play-Music").on("click", function() {
          audioElement.play();
          var music = $("<button>");
          var musicP = $("button").addClass("Play-Music");
          $(".container").append(music);
          
          // var audioElement = $("audio");
          // audioElement.attr("src", "assets/Evil_Laugh_Male_6-Himan-1359990674.mp3");
      
        });
        
        