var buttonArray = document.querySelectorAll(".drum");

for(var i=0; i<buttonArray.length; i++){
    buttonArray[i].addEventListener("click" , function() {
        var buttonInnerHTML = this.innerHTML ;

        checkChar(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    var keyPressed = event.key;

    checkChar(keyPressed);
    buttonAnimation(keyPressed);
});

function checkChar(character){
    switch (character) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
                
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
                
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
                    
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
                        
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;        
    
        default:
            break;
    }
}

function buttonAnimation(pressedKey){
    var activeButton = document.querySelector("." + pressedKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
