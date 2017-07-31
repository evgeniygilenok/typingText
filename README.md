# typingText
Plugin that makes animation of your text looks like it's typing itself. It contains two files - typing_text.js and typing_text.css (animation cursor).

Function typingText(obj) takes an object as an argument:

    obj{
        words: (array of strings),
        delayTyping: (number - delay typing between letters),
        delayWords: (number - delay typing between words),
        idBlock: (id of block, that you need to animate) 
    }
