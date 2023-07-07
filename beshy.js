function beshy() {
    var inputText = document.getElementById("inputTxt").value;
    var beshyText = inputText.split(" ");
    var output = "";
    
    for (var i = 0; i < beshyText.length; i++) {
        output += beshyText[i] + " 🤸🏼‍♂️ ";
    }
    
    document.getElementById("outputTxt").innerText = output;
}

function play() {
    var audio = new Audio("audio.mp3");
    audio.play();
}

function copyText() {
    var outputText = document.getElementById("outputTxt");
    var textRange = document.createRange();
    textRange.selectNode(outputText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(textRange);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
    var responseMsg = document.getElementById("responseMsg");
    responseMsg.innerText = "Copy successful!";
    setTimeout(function() {
        responseMsg.innerText = "";
    }, 2000);
}

var emojiAnimation = document.querySelector('.emoji-animation');

var numEmoji = 5;

for (var i = 0; i < numEmoji; i++) {
    var img = document.createElement('img');
    img.src = 'tumbling-emoji.png';
    img.alt = 'Tumbling Emoji';
    img.classList.add('tumble-animation');
    img.style.top = Math.random() * 100 + '%';
    img.style.left = Math.random() * 100 + '%';
    emojiAnimation.appendChild(img);
}

var backgroundMusic = new Audio("audio.mp3");
backgroundMusic.loop = true;

document.addEventListener("DOMContentLoaded", function() {
  backgroundMusic.play();
});
