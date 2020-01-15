$(document).ready(function() {
  $("#letterInput").submit(function(event) {
    var firstInput = $("input#firstname").val();
    var lastInput = $("input#lastname").val();
    var address1Input= $("input#address1").val();
    var address2Input = $("input#address2").val();

    $(".firstname").append(firstInput);
    $(".lastname").append(lastInput);
    $(".address1").append(address1Input);
    $(".address2").append(address2Input);

    $("#letterInput").hide();
    $("#letterOutput").show();

    event.preventDefault();
  });
});