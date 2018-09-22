$(document).ready(function(){


    // DELCARE GLOBAL VARIABLES
    //   movie search function
    
    var topics = ["Bill Murray", "Chris Farley", "Tim Meadows", "Tina Fey", "Will Ferrell"];
    var animatedGif;
    var pausedGif;
    var stillGif;
    var currentGif;
          // Function for displaying movie data
          function renderButtons() {
    
            // Deleting the movie buttons prior to adding new movie buttons
            // (this is necessary otherwise we will have repeat buttons)
            $("#movies-view").empty();
            
    
            // Looping through the array of movies
            for (var i = 0; i < topics.length; i++) {
    
              // Then dynamicaly generating buttons for each movie in the array.
              // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
              var a = $("<button>");
              // Adding a class
              a.addClass("movie");
              // Adding a data-attribute with a value of the movie at index i
              a.attr("data-name", topics[i]);
              // Providing the button's text with a value of the movie at index i
              a.text(topics[i]);
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
            if (movie == ""){
              return false; // added so user cannot add a blank button
            }
    
            
         
            // The movie from the textbox is then added to our array
            topics.push(movie);
            $('#movie-input').val('');
            
         
            // calling renderButtons which handles the processing of our movie array
            renderButtons();
            ajaxButton();
           
          });
    
          // Calling the renderButtons function at least once to display the initial list of movies
          renderButtons();
         
    
    function ajaxButton() {
    
    $("button").on("click", function() {
      
      $("#gifs-appear-here").empty();
        // Grabbing and storing the data-animal property value from the button
        var topics = ["Bill Murray", "Chris Farley", "Tim Meadows", "Tina Fey", "Will Ferrell"];
        topics = $(this).attr("data-name");
    console.log(topics)
        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          topics + "&api_key=bjmCLbvWyaPYyHcAHisKO0yoo3c6k7Ix&limit=10";
    
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
            currentGif = response.data;
    
    
      
            // Looping through each result item
            for (var i = 0; i < currentGif.length; i++) {
            
              // Creating and storing a div tag
              var animalDiv = $("<div class='customCol col-md-4'>");
    
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + currentGif[i].rating);
             
              // Creating and storing an image tag
              var animalImage = $("<img class='theGif'>");
              // Setting the src attribute of the image to a property pulled off the result item
              animalImage.attr("src", currentGif[i].images.fixed_height_small_still.url);
              animalImage.attr("data-still",currentGif[i].images.fixed_height_small_still.url); // still image
              animalImage.attr("data-animate",currentGif[i].images.fixed_height_small.url); // animated image
              animalImage.attr("data-state", "still");
              
         
    
              // Appending the paragraph and image tag to the animalDiv
            
              animalDiv.append(animalImage);
              animalDiv.append(p);
    
              // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
              $("#gifs-appear-here").prepend(animalDiv);
             
            } // end of for loop
          
    
          });
      });
    
    
    
    } // end of ajaxButton function
    
    ajaxButton();
   
   
    $(document).on("click", ".theGif", function(){
        var state = $(this).attr('data-state');
        if ( state == 'still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }else{
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });
    
    
        }); //end of document.ready