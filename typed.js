//This will run after the page has loaded.
jQuery(document).ready(function() {
  var type = new Typed('#typed', {
  	// These are the words on the screen.
    strings: [
      'Welcome to my Student Showcase!',
      'My curator is Troy.',
      'Feel free to ask him some questions if you want!',
      'Here we go!',
      '',
    ],
    typeSpeed: 40, //How fast it types
    backSpeed: 30, //How fast it deletes
    backDelay: 1000, //How long before it starts deleting
    startDelay: 50,  //How long before it starts typing
    loop: false  //If the text should repeat
  });
});
