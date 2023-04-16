// ** DATA MODEL ** //
var currentColors = ['#EA9999', '#FACB9C', '#FFE59A', '#B6D7A8', '#A4C4CA'];
var savedPalettes = [];

// ** VARIABLES ** //
var boxesContainer = document.querySelector('.boxes__container');
var boxesWrapper = document.querySelector('.boxes');
var savedPalettesContainer = document.querySelector('.saved__palettes');
var newButton = document.querySelector('.buttons__new');
var saveButton = document.querySelector('.buttons__save');
var locked = document.querySelector('.boxes__locked');
var unlocked = document.querySelector('.boxes_unlocked');
var boxesAll = document.querySelectorAll('.boxes__box');
var hexesAll = document.querySelectorAll('.boxes__hex');
var savedMessage = document.querySelector('.saved__message');

// ** EVENT LISTENERS ** //
newButton.addEventListener('click', changeDisplayColors);

boxesWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('boxes__unlocked') || event.target.classList.contains('boxes__locked')) {
        flipLock(event.target);
    }
});

saveButton.addEventListener('click', function() {
    savePalettes();
    displaySavedPalettes(savedPalettes);
});

savedPalettesContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('saved__delete')) {
        deletePalette(event);
    }
    if (event.target.classList.contains('saved__box')) {
        editPalette(event);
    }
});

// ** FUNCTIONS ** //

    // ** Main Section ** //

function getRandomChar() {
    var characters = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return characters[Math.floor(Math.random() * characters.length)];
};

function generateRandomColor() {
    var hex = ['#'];
    for(var i = 0; i < 6; i++) {
        hex.push(getRandomChar());
    }
    hex = hex.join('');
    return hex;
};

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
    displayColors(currentColors);
}

function displayColors(palette) {    
    for (var i = 0; i < boxesAll.length; i++) {
        boxesAll[i].style['background-color'] = palette[i];
        hexesAll[i].innerText = palette[i];
    }
};

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
};

function show(element) {
    element.classList.remove('boxes--hidden');
};

function hide(element) {
    element.classList.add('boxes--hidden');
};

    // ** Saved Section ** //

function savePalettes() {
    var savedPalette = {
        box1: currentColors[0],
        box2: currentColors[1],
        box3: currentColors[2],
        box4: currentColors[3],
        box5: currentColors[4],
        id: Date.now()
    };
    savedPalettes.push(savedPalette);
};

function displaySavedPalettes(palette) {
    savedPalettesContainer.innerHTML = '';
    for (var j = 0; j < palette.length; j++) {
        savedPalettesContainer.innerHTML += 
        `<box class='saved__boxes' id=${palette[j].id}>
            <box class='saved__box' style='background-color: ${palette[j].box1}'></box>
            <box class='saved__box' style='background-color: ${palette[j].box2}'></box>
            <box class='saved__box' style='background-color: ${palette[j].box3}'></box>
            <box class='saved__box' style='background-color: ${palette[j].box4}'></box>
            <box class='saved__box' style='background-color: ${palette[j].box5}'></box>
            <img alt='delete' src='assets/delete.png' class='saved__delete'>
        </box>`; 
    }
    changeDisplayColors();

    if (savedPalettes.length === 0) {
        savedPalettesContainer.innerHTML += "<p class='saved__message'>No saved palettes yet!</p>"
    }
};

function deletePalette(event) {
    var paletteId = parseInt(event.target.closest('.saved__boxes').id);
    for (var i = 0; i < savedPalettes.length; i++) {
        if (paletteId === savedPalettes[i].id) {
            savedPalettes.splice(i, 1);
        }
    }
    displaySavedPalettes(savedPalettes);
};

function editPalette(event) {
    var palette = [];
    var paletteId = parseInt(event.target.closest('.saved__boxes').id);
    for (var i = 0; i < savedPalettes.length; i++) {
        if(paletteId === savedPalettes[i].id) {
            palette.push(savedPalettes[i].box1)
            palette.push(savedPalettes[i].box2)
            palette.push(savedPalettes[i].box3)
            palette.push(savedPalettes[i].box4)
            palette.push(savedPalettes[i].box5)
        }
    }
    currentColors = palette;
    displayColors(palette);
};

