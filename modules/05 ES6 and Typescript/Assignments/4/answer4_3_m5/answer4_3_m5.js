/*

function RandomWord (charsArray) {
    if (typeof charsArray === 'object'){
        //this.result = randomize(charsArray);
    }
    else {
        console.log ('"chars" should be an array.');
    }
    this.randomize = function(length){
        if (typeof length === 'number')
        {
            var text = "";
            var possible = charsArray.join("");
            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        else {
            console.log('"length" should be a number.');
        }
    }
}

var word1 = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));

*/
var RandomWord = /** @class */ (function () {
    function RandomWord(charsArray) {
        this.charsArray = charsArray;
    }
    RandomWord.prototype.randomize = function (length) {
        var text = "";
        var possible = this.charsArray.join("");
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    return RandomWord;
}());


var word1 = new RandomWord(['a', 'b', 'c']);
console.log(word1.randomize(10));
