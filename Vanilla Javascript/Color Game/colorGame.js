var numberSquare = 6;
var colors = generateColor(numberSquare);

var colorContainer = document.querySelectorAll(".square");
var pickedColor = colorPicker();
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

for(var i=0; i<modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        
        if(this.textContent === "Easy"){
            numberSquare = 3;
        }
        else {
            numberSquare = 6;
        }

        reset();
    });
}

function reset(){
    colors = generateColor(numberSquare);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor

    displayMessage.textContent = "";
    
    for(var i = 0; i < colorContainer.length; i++){
        if(colors[i]){
            colorContainer[i].style.backgroundColor = colors[i];
            colorContainer[i].style.display = "block";
        }
        else {
            colorContainer[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
    reset();
});

for(var i=0; i<colorContainer.length; i++){
    colorContainer[i].style.backgroundColor = colors[i];

    colorContainer[i].addEventListener("click", function(){

        var clickedColor = this.style.backgroundColor;

        if(pickedColor === clickedColor){
            displayMessage.textContent = "Correct!!";
            correctColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            displayMessage.textContent = "Wrong";
            this.style.backgroundColor = "#232323";
        }
    });
}

function correctColor(color){
    for(var i = 0; i < colorContainer.length; i++){
        colorContainer[i].style.backgroundColor = color;
    }
}

function colorPicker(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num){
    var arr = [];
    
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}