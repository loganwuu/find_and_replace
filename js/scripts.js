var findAndReplace = function(inputString, findWord, replaceWord) {
    //removes punctuations
    var inputString = inputString.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    //converts the string to an array
    var wordsArray = inputString.split(' ');
    for (var i = 0; i <wordsArray.length; i++) {
        if (findWord === wordsArray[i]) {
            wordsArray.splice(i, 1, replaceWord);
        }
    }
    //converts the array back to a string
    var outputString = wordsArray.join(' ');
    if (outputString === inputString) {
        return 'Sorry, no match found between the words in your sentence and the replacing word.'
    } else {
        return outputString;
    }
};

$(document).ready(function(){
  $("form#findAndReplace").submit(function(event) {
        var inputString = $("input#inputString").val();
        var findWord = $("input#findWord").val();
        var replaceWord = $("input#replaceWord").val();
        var result = findAndReplace(inputString, findWord, replaceWord);

        $(".findAndReplace").text(result);
        $("#result").show();

        event.preventDefault();
    });
});
