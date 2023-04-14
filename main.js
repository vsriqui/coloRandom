// ** GLOBAL VARIABLES ** //

// ** Arrays ** //
var currentColors = ['#EA9999', '#FACB9C', '#FFE59A', '#B6D7A8', '#A4C4CA'];
var savedPalettes = [];

// ** Color Boxes ** //
var boxesContainer = document.querySelector('.boxes__container');
var boxesAll = document.querySelectorAll('.boxes__box');
var boxesWrapper = document.querySelector('.boxes');

// ** Color Hexes ** //
var hexesAll = document.querySelectorAll('.boxes__hex');

// ** Saved Palettes ** //
var savedColors = document.querySelector('.saved__palettes');

// ** Buttons ** //
var newButton = document.querySelector(".buttons__new");
var saveButton = document.querySelector('.buttons__save');

// ** Locks ** // 
var locked = document.querySelector('.boxes__locked');
var unlocked = document.querySelector('.boxes_unlocked');

// ** Event Listeners ** //
newButton.addEventListener('click', changeDisplayColors);

boxesWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('boxes__unlocked') || event.target.classList.contains('boxes__locked')) {
        flipLock(event.target);
    }
})

saveButton.addEventListener('click', displaySavedPalettes);
    
// ** FUNCTIONS ** //

// ** Generate Random Palette ** //

function getRandomChar() {
    var characters = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return characters[Math.floor(Math.random() * characters.length)];
};

function generateRandomColor() {
    var hex = ['#'];
    for(var i = 0; i < 6; i++) {
        hex.push(getRandomChar())
    }
    hex = hex.join('');
    return hex;
}

function getRandomColors() {
    var randomColors = [];
    for (var i = 0; i < 5; i++) {
        if (!boxesAll[i].classList.contains('locked')) {
            var newColor = generateRandomColor();
            randomColors.push(newColor);
        } else {
            randomColors.push(currentColors[i]);
        }
    }
    currentColors = randomColors;

    return currentColors;
};

  
function changeDisplayColors() { 
    getRandomColors();

    for (var i = 0; i < boxesAll.length; i++) {
        boxesAll[i].style['background-color'] = currentColors[i];
        hexesAll[i].innerText = currentColors[i];
    }
};

// ** Change Lock Display ** //

function flipLock(element) {
    if (element.classList.contains('boxes__unlocked')) {
        hide(element);
        show(element.nextElementSibling);
        element.closest('box').classList.add('locked');
    } else {
        hide(element);
        show(element.previousElementSibling);  
        element.closest('box').classList.remove('locked'); 
    }    
}

// ** Saved Palettes ** //

function displaySavedPalettes() {
    savedPalettes.push(currentColors);

    savedColors.innerHTML = '';
    for (var j = 0; j < savedPalettes.length; j++) {
        savedColors.innerHTML += 
        `<box class='saved__boxes id:${Date.now()}'>
            <box class='saved__box' style='background-color: ${savedPalettes[j][0]}'></box>
            <box class='saved__box' style='background-color: ${savedPalettes[j][1]}'></box>
            <box class='saved__box' style='background-color: ${savedPalettes[j][2]}'></box>
            <box class='saved__box' style='background-color: ${savedPalettes[j][3]}'></box>
            <box class='saved__box' style='background-color: ${savedPalettes[j][4]}'></box>
            <img alt="delete" src="assets/delete.png" class="saved__delete">
        </box>`; 
    }
    changeDisplayColors();
}

// ** Helper Functions ** //

function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}