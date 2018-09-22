$(document).ready(function () {


	// Declare variables


	var topics = ["Bill Murray", "Chris Farley", "Tim Meadows", "Tina Fey", "Will Ferrell"];
	var animatedGif;
	var pausedGif;
	var stillGif;
	var currentGif;
	// Function for submitting search data
	function generatedButton() {

		// clears submitted buttons before new one appears in order to account for duplicates
		$("#comedian-view").empty();


		// Looping through the array of topics
		for (var i = 0; i < topics.length; i++) {

			//  dynamically generating button, class, attribute and appending button to #comedian-view div
			var a = $("<button>");
			a.addClass("comedian");
			// Adding a data-attribute with a value of the topic at index i
			a.attr("data-name", topics[i]);
			// Providing the button's text with a value of the topic at index i
			a.text(topics[i]);
			$("#comedian-view").append(a);

		}
	}

	// This function handles events where one button is clicked
	$("#add-comedian").on("click", function (event) {
		//  prevents default action associated with the click
		event.preventDefault();

		// This line will grab the text from the input box and remove any white space from beginning and end
		var comedian = $("#comedian-input").val().trim();
		if (comedian == "") {
			return false; // added so user cannot add a blank button
		}


		// The search term from the textbox is then added to our array
		topics.push(comedian);
		// clears out search input after topic is submitted
		$('#comedian-input').val('');


		// calling generatedButton which handles the processing of our topics array
		generatedButton();
		gifButton();

	});

	// Calling the generatedButton function at least once to display the initial list of topics
	generatedButton();


	function gifButton() {

		$("button").on("click", function () {

			$("#gifs-appear-here").empty();
			// Grabbing and storing the topics array
			var topics = ["Bill Murray", "Chris Farley", "Tim Meadows", "Tina Fey", "Will Ferrell"];
			topics = $(this).attr("data-name");
			console.log(topics)
			// Constructing a queryURL using the topics name
			var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
				topics + "&api_key=bjmCLbvWyaPYyHcAHisKO0yoo3c6k7Ix&limit=10";

			// Performing an AJAX request with the queryURL
			$.ajax({
					url: queryURL,
					method: "GET"
				})
				// After data comes back from the request
				.then(function (response) {
					console.log(queryURL);

					console.log(response);
					// storing the data from the AJAX request in the currentGif variable
					currentGif = response.data;


					// Looping through each item
					for (var i = 0; i < currentGif.length; i++) {

						// Creating and storing a div tag
						var comedianDiv = $("<div class='customCol col-md-4'>");

						// Creating a paragraph tag with the item's rating
						var p = $("<p>").text("Rating: " + currentGif[i].rating);

						// Creating and storing an image tag
						var comedianImage = $("<img class='theGif'>");
						// Setting the src attribute of the image to a property pulled off the result item
						comedianImage.attr("src", currentGif[i].images.fixed_height_small_still.url);
						comedianImage.attr("data-still", currentGif[i].images.fixed_height_small_still.url); // still image
						comedianImage.attr("data-animate", currentGif[i].images.fixed_height_small.url); // animated image
						comedianImage.attr("data-state", "still");


						// Appending the paragraph and image tag to the comedianDiv

						comedianDiv.append(comedianImage);
						comedianDiv.append(p);

						// Prependng the comedianDiv to the HTML page in the "#gifs-appear-here" div
						$("#gifs-appear-here").prepend(comedianDiv);

					} // end of for loop


				});
		});


	} // end of gifButton function

	gifButton();

	//  if/else statement that provides functionality for still/animate states onClick of .theGif
	$(document).on("click", ".theGif", function () {
		var state = $(this).attr('data-state');
		if (state == 'still') {
			$(this).attr('src', $(this).data('animate'));
			$(this).attr('data-state', 'animate');
		} else {
			$(this).attr('src', $(this).data('still'));
			$(this).attr('data-state', 'still');
		}
	});


}); //end of document.ready