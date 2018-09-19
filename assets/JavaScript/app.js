$(document).ready(function(){


// DELCARE GLOBAL VARIABLES
//   movie search function

var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#movies-view").empty();
        

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("movie");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", movies[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(movies[i]);
          // Adding the button to the HTML
          $("#movies-view").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event) {
        
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var movie = $("#movie-input").val().trim();

    
     
        // The movie from the textbox is then added to our array
        movies.push(movie);
        
     
        // calling renderButtons which handles the processing of our movie array
        renderButtons();
       
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();
     








$("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    
    var topics = $(this).attr("data-animal");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=bjmCLbvWyaPYyHcAHisKO0yoo3c6k7Ix&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        topics = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var animalDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var animalImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          animalImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          animalDiv.append(p);
          animalDiv.append(animalImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
  });








    }); //end of document.ready
