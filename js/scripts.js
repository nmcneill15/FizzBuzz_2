$(document).ready(function() {
  $("#form").on("submit", function(e) {
    e.preventDefault();
    $("#list").empty();
    var num = $("#number").val();
    fizzBuzz(num);
    $("#number").val("").focus();

  });

});

function fizzBuzz(num) {
  num = parseInt(num);
  if (isNaN(num)) {
    alert("stupid! You must enter a number");
  } else {
    for (i = 1; i <= num; i++) {
      if (i % 3 === 0) {
        if (i % 5 === 0) {
          $("#list").append("<li>FizzBuzz</li>");
        } else {
          $("#list").append("<li>Fizz</li>");
        }
      } else if (i % 5 === 0) {
        $("#list").append("<li>Buzz</li>");
      } else {
        $("#list").append("<li>" + i + "</li>");
      }
    }
  }
}
