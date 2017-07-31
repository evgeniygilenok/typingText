'use strict';
function typingText({
    words: words,
    delayTyping: delayTyping,
    delayWords: delayWords,
    idBlock: idBlock
}) {
    var words = arguments[0].words;
    var delayTyping = arguments[0].delayTyping;
    var delayWords = arguments[0].delayWords;
    var idBlock = arguments[0].idBlock;
    if (words === undefined) {
        console.log('Please enter words property for typing');
        words = ['nothing', 'nothing'];
    };
    if (isNaN(delayTyping)) {
        delayTyping = 120;
    };
    if (isNaN(delayWords)) {
        delayWords = 1500;
    };
    if (idBlock === undefined) {
        idBlock = 'idBlock';
        console.log('Please enter idBlock property');
    } else {
        var output = document.getElementById(idBlock);
        var strNumber = 0;
        var count = 0;
        var back = false;
        var dalay = delayTyping;
        var printLetter = setInterval(function printL() {
            if (strNumber === words.length) {
                strNumber = 0;
            };
            if (!back) {
                clearInterval(printLetter);
                dalay = delayTyping;
                printLetter = setInterval(printL, dalay);
                var outStr = '';
                count++;
                if (count > words[strNumber].length - 1) {
                    back = true;
                    clearInterval(printLetter);
                    dalay = delayWords;
                    printLetter = setInterval(printL, dalay);
                };
                outStr = words[strNumber].slice(0, count);
                output.innerText = outStr;
            } else {
                clearInterval(printLetter);
                dalay = delayTyping * 0.5;
                printLetter = setInterval(printL, dalay);
                var outStr = '';
                count--;
                back = true;
                if (count === 0) {
                    back = false;
                    strNumber++;
                };
                if (strNumber < words.length) {
                    outStr = words[strNumber].slice(0, count);
                    output.innerText = outStr;
                };
            };
        }, dalay);
    };
};