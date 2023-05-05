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
window.addEventListener('load', changeDisplayColors);
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
    var paletteId = parseInt(event.target.closest('.saved__boxes').id);  
    if (event.target.classList.contains('saved__delete')) {
            deletePalette(paletteId);
        } else {
            editPalette(paletteId);
        }
});

// ** FUNCTIONS ** //

    // ** Main Section ** //

function getRandomChar() {
    var chars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return chars[Math.floor(Math.random() * chars.length)];
};

function generateRandomColor() {
    var hex = ['#'];
    for (var i = 0; i < 6; i++) {
      hex.push(getRandomChar());
    }
    hex = hex.join('');
    return hex;
};

function getRandomColors() {
    var randomColors = [];
    for (var i = 0; i < 5; i++) {
        if (boxesAll[i].classList.contains('locked')) {
            randomColors.push(currentColors[i]);  
        } else {
            var newColor = generateRandomColor();
            randomColors.push(newColor); 
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

function displaySavedPalettes(palettes) {
    savedPalettesContainer.innerHTML = '';
  
    palettes.forEach(palette => {
        savedPalettesContainer.innerHTML += 
        `<box class='saved__boxes' id=${palette.id}>
          <box class='saved__box' style='background-color: ${palette.box1}'></box>
          <box class='saved__box' style='background-color: ${palette.box2}'></box>
          <box class='saved__box' style='background-color: ${palette.box3}'></box>
          <box class='saved__box' style='background-color: ${palette.box4}'></box>
          <box class='saved__box' style='background-color: ${palette.box5}'></box>
          <img alt='delete' src='assets/delete.png' class='saved__delete'>
        </box>`; 
    });

    if (!savedPalettes.length) {
        savedPalettesContainer.innerHTML += "<p class='saved__message'>No saved palettes yet!</p>"
    };

    changeDisplayColors();
};

function deletePalette(id) {
    savedPalettes = savedPalettes.filter(palette => id !== palette.id);
    displaySavedPalettes(savedPalettes);
};

function editPalette(id) {
    var workingPalette = [];

    savedPalettes.map(palette => {
        if (id === palette.id) {
            workingPalette.push(palette.box1)
            workingPalette.push(palette.box2)
            workingPalette.push(palette.box3)
            workingPalette.push(palette.box4)
            workingPalette.push(palette.box5)
        };
    });

  currentColors = workingPalette;
  displayColors(currentColors);
};

