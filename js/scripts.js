var findAndReplace = function(inputString, findWord, replaceWord) {
    var inputString = inputString.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    var wordsArray = inputString.split(' ');
    for (var i = 0; i <wordsArray.length; i++) {
        if (findWord === wordsArray[i]) {
            wordsArray.splice(i, 1, replaceWord);
        }
    }
    debugger;
    return wordsArray.join(' ');
};


// $(document).ready(function(){
//   $("form#wordOrder").submit(function(event) {
//         var string = $("input#string").val();
//         var result = wordOrder(string);
//         $('.wordOrder').empty();
//         for (key in result) {
//             $('.wordOrder').append(key + ": " + result[key] + " ");
//         }
//         event.preventDefault();
//     });
// });
