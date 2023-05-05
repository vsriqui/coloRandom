// ** DATA MODEL ** //
let currentColors = [];
let savedPalettes = [];

// ** VARIABLES ** //
const boxesContainer = document.querySelector('.boxes__container');
const boxesWrapper = document.querySelector('.boxes');
const savedPalettesContainer = document.querySelector('.saved__palettes');
const newButton = document.querySelector('.buttons__new');
const saveButton = document.querySelector('.buttons__save');
const locked = document.querySelector('.boxes__locked');
const unlocked = document.querySelector('.boxes_unlocked');
const boxesAll = Array.from(document.querySelectorAll('.boxes__box'));
const hexesAll = Array.from(document.querySelectorAll('.boxes__hex'));
const savedMessage = document.querySelector('.saved__message');

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
    const paletteId = parseInt(event.target.closest('.saved__boxes').id);  
    if (event.target.classList.contains('saved__delete')) {
        deletePalette(paletteId);
    } else {
        editPalette(paletteId);
    }
});

// ** FUNCTIONS ** //

// ** Main Section ** //

function getRandomChar() {
    const chars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return chars[Math.floor(Math.random() * chars.length)];
};

function generateRandomColor() {
    let hex = ['#'];
    for (let i = 0; i < 6; i++) {
        hex.push(getRandomChar());
    }
    hex = hex.join('');
    return hex;
};

function getRandomColors() {
    let randomColors = [];
    boxesAll.forEach(box => {
        if (box.classList.contains('locked')) {
            randomColors.push(currentColors[boxesAll.indexOf(box)]); 
        } else {
            const newColor = generateRandomColor();
            randomColors.push(newColor); 
        };
    });

    currentColors = randomColors;
    return currentColors;
};

function displayColors(palette) {    
    boxesAll.forEach(box => {
        box.style['background-color'] = palette[boxesAll.indexOf(box)];
    });

    hexesAll.forEach(hex => {
        hex.innerText = palette[hexesAll.indexOf(hex)];
    });
};

function changeDisplayColors() { 
    getRandomColors();
    displayColors(currentColors);
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
    };  
};

function show(element) {
    element.classList.remove('boxes--hidden');
};

function hide(element) {
    element.classList.add('boxes--hidden');
};

// ** Saved Section ** //

function savePalettes() {
    const savedPalette = {
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
    let workingPalette = [];

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