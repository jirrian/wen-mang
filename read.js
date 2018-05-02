var selectedText = window.getSelection().toString();

responsiveVoice.speak(selectedText, "Chinese Female", {rate: 0.7}, {pitch: 1.8});
console.log(selectedText);