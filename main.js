// ** Color Boxes ** //
var box1 = document.querySelector(".boxes__box1");
var box2 = document.querySelector(".boxes__box2");
var box3 = document.querySelector(".boxes__box3");
var box4 = document.querySelector(".boxes__box4");
var box5 = document.querySelector(".boxes__box5");
var boxesContainer = document.querySelector('.boxes__container');
var boxesAll = document.querySelectorAll('.boxes__box');
var hexesAll = document.querySelectorAll('.boxes__hex');

// ** Color Hexes ** //
var hex1 = document.querySelector(".boxes__hex1");
var hex2 = document.querySelector(".boxes__hex2");
var hex3 = document.querySelector(".boxes__hex3");
var hex4 = document.querySelector(".boxes__hex4");
var hex5 = document.querySelector(".boxes__hex5");

// ** Arrays ** //

var characters = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var currentColors = [];

// ** Buttons ** //
var newButton = document.querySelector(".buttons__new");

// ** Event Listeners ** //

newButton.addEventListener('click', changeColors);
    

// ** Functions ** //

// ** Random Palette ** //

function getRandomChar() {
    var characters = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return characters[Math.floor(Math.random() * characters.length)];
};

function getRandomColors() {
    var randomColors = [];
    for (var j = 0; j < 5; j++) {
        var hex = ['#'];
        for(var i = 0; i < 6; i++) {
            hex.push(getRandomChar())
        }
        randomColors.push(hex.join(''));
    }
    return randomColors;
};
  
function changeColors() {
    currentColors = getRandomColors();
    for (var i = 0; i < boxesAll.length; i++) {
        boxesAll[i].style['background-color'] = currentColors[i];
        hexesAll[i].innerText = currentColors[i];
    }
};



var locked1 = document.querySelector(".boxes__locked1")
var unlocked1 = document.querySelector(".boxes__unlocked1")
var bool1 = true;
var lockbox1 = document.querySelector(".boxes__lockbox1");

lockbox1.onclick = function() {
flipLock1(bool1)
}

function flipLock1(bool) {
    if (!bool) {
        bool1 = true;
        unlocked1.style.display = "block";    
        locked1.style.display = "none"; 
    } else {
        bool1 = false;
        unlocked1.style.display = "none";    
        locked1.style.display = "block"; 
    }    
}

// boxesContainer.addEventListener('click', function(event) {
//     console.log(event.target.closest('box'))
// })