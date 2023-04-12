// ** Color Boxes ** //
var box1 = document.querySelector(".boxes__box1");
var box2 = document.querySelector(".boxes__box2");
var box3 = document.querySelector(".boxes__box3");
var box4 = document.querySelector(".boxes__box4");
var box5 = document.querySelector(".boxes__box5");
var boxesAll = document.querySelectorAll('.boxes__box');
var hexesAll = document.querySelectorAll('.boxes__hex');

// ** Color Hexes ** //
var hex1 = document.querySelector(".boxes__hex1");
var hex2 = document.querySelector(".boxes__hex2");
var hex3 = document.querySelector(".boxes__hex3");
var hex4 = document.querySelector(".boxes__hex4");
var hex5 = document.querySelector(".boxes__hex5");

// ** Arrays ** //

var alphabet = ["A","B","C","D","E","F"];
var currentColors = [];

// ** Buttons ** //
var newButton = document.querySelector(".buttons__new");

// ** Event Listeners ** //

newButton.addEventListener('click', changeColors);
    

// ** Functions ** //

// ** Random Palette ** //

function getRandomNumber () {
  var index = Math.floor(Math.random() * 10);
  return index;
};

function getRandomLetter() {
  var index = Math.floor(Math.random() * 6);
  var letter = alphabet[index];
  return letter;
};

function getRandomIndex() {
  var index = Math.floor(Math.random() * 2);
  return index;
};

function getRandomColors() {
  var randomColors = [];
  for (var j = 0; j < 5; j++) {
    var hex = ['#'];
    for(var i = 0; i < 6; i++) {
      if (getRandomIndex()) {
        hex.push(getRandomNumber());
      } else {
        hex.push(getRandomLetter());
      }
    }
    randomColors.push(hex.join(''));
  }
  return randomColors;
};
  
  // Write a function that loops through each box and applies the random colors to each.
  // Steps:

function changeColors() {
    var randomColors = getRandomColors();
    for (var i = 0; i < boxesAll.length; i++) {
        boxesAll[i].style['background-color'] = randomColors[i];
        hexesAll[i].innerText = randomColors[i];
    }
  };

