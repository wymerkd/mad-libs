$(document).ready(function() {
  $('#formone').submit(function(event) {

    var blanks = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun'];

    blanks.forEach(function(blank) {
      var userInput = $('input#' + blank).val();
      $("." + blank).text(userInput);
    });

    $('#story').show();
    event.preventDefault();
  });

   var clickables = ['h1', 'span'];
   clickables.forEach(function(clickable) {
    var newClick = $(clickable);
    newClick.click(function() {
     alert('wow!')
   });
 });
});
