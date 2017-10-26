    var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = " ";
    var replaceNum = function(_userInput) {
      for (var index = 0; index < numbers.length; index += 1) {
        while (numbers[index] <= _userInput) {
          result += romanSymbols[index];
          _userInput -= numbers[index];

        }
      }
      return result;
    }

$(function(){
  $("form").click(function(event){
    var userInput = $("#numOnly").val();
    var romanNumeral = replaceNum(userInput);
    $("#result").text(replaceNum);

    event.preventDefault();
  });
});
