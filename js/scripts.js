$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input").val();
    $("#result").text(userInput).val();

  });
});
