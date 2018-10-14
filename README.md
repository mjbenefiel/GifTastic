<h1> Giphy Search Engine | Favorite SNL Cast Member </h1>

Live version: https://mjbenefiel.github.io/GifTastic/
<hr></hr>

Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr></hr>

<h3> App screenshot </h3>

![alt text](https://raw.githubusercontent.com/mjbenefiel/GifTastic/master/assets/images/readme.jpg "Giphy Search Engine")

<h2> Project overview</h2>
Kind of like Google, but for Giphy. This app utilizes jQuery and the Giphy API to search for GIFs.
<hr></hr>

<h2> How it works </h2>
Type in the gif you're looking for. Hit submit. Similar to the Google Search Engine. Simple and easy.
<hr></hr>

<h2>Technology used</h2>

[Giphy API](https://developers.giphy.com/)

[Bootstrap 4.1.2 ](http://getbootstrap.com/)

[jQuery 3.3.1](https://jquery.com/)

<hr></hr>

<h4>Below is a thorough, but not comprehensive, step-by-step process of how I got the app running in terms of code</h4>

- Delcared variables

- generatedButton function loops through array of topics and assigns each one to a button, then appends them to the comedian-view div

- #add-comedian onClick pulls information typed into search box, allows user to hit the submit button and then push the information into a button. There's also a condition set up that restricts a user from pushing a blank button to the comedian-view

- gifButton function uses AJAX call to "talk" with the GIPHY API to pull GIFs into my web app

- Search query set up to only pull 10 GIFs per search

- for loop runs through pulled GIFs

- variable declared to set rating of GIF

- attributes designating still and animated images

- document onClick assigned to GIFs that allows user to click an image for animated effect, and click again for original/still effect.
