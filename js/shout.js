$(document).ready(function() {
  $("form#shouting").submit(function(event) {
    var yell = $("input#quiet").val();
    alert(yell.toUpperCase());
    event.preventDefault();
  });
});