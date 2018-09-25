var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    // Generate new colors
    colors = generateRandomColors(numSquares);
    // Pick new random color
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    this.textContent = "NEW COLORS";
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = colors[i];

    // Add a click listener to the squares!
    squares[i].addEventListener("click", function(){
        // grab color of sqaure
        var clickedColor = this.style.backgroundColor;
        // compare it to the pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } 
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    // loop though all squares
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
    // change each color to match the given color
}

function pickColor(color) {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for(var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // Pick a red from 0 to 255
    var red = Math.floor(Math.random() * 256);
    // Pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256);    
    // Pick a blue from 0 to 255    
    var blue = Math.floor(Math.random() * 256);  
    
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}