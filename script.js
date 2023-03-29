// Create a webpage with a 16x16 grid of square divs.
// create row containing 16 divs
// create row
// insert 16 divs as cells
// create row 15 more times

let container = document.querySelector('#container');

//create 16*16 grid
function generateGrid() {
    for (let squares = 0; squares < 256; squares++) {
    const grid = document.createElement('div');
    grid.classList.add("cell");

    container.appendChild(grid);

    grid.style.width = 31.25 + "px";
    grid.style.height = 31.25 + "px";
    grid.style.flexShrink = '0';
    grid.style.border = '0.5px solid #E2CCCA'
    grid.style.backgroundColor = '#FBF4EF'

    }
}
generateGrid();

// add colour change on hover
const divs = document.querySelectorAll('#container > div');

for (const div of divs) {
    div.addEventListener('mouseover', function mouseOver() {
        div.style.backgroundColor = '#C3889D';
    })
}

const button = document.getElementById("btn");
button.addEventListener("click", changeGridSize);


let gridSize;

function changeGridSize() { 
    gridSize = prompt('How many squares per side would you like in the grid? Please select a number between 1 and 100.');

    gridSize = parseInt(gridSize);
    checkGridInput();
    gridSize = checkGridInput;
    return gridSize;
}

function checkGridInput() {
    if (gridSize < 1 || gridSize > 100) {
        gridSize = prompt('Please select a number between 1 and 100;');
        console.log(gridSize);
        return checkGridInput();
    } if (gridSize = isNaN(gridSize)) {
        gridSize = prompt('Please input a numerical value.');
        console.log(gridSize);
        return checkGridInput();
    }
}

