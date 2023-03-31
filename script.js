const container = document.getElementById('container');

for (let squares = 0; squares < 256; squares++) {
    let grid = document.createElement('div');

    grid.style.backgroundColor = '#FBF4EF';
    grid.style.height = '31.25px';
    grid.style.width = '31.25px';

    grid.style.border = 'solid 0.5px #E2CCCA'

    container.appendChild(grid);
}

const canvas = container.querySelectorAll('div');

for (const squares of canvas) {
    squares.addEventListener('mouseenter', () => {
        squares.style.backgroundColor = '#C3889D';
    }
    )
}

/*
Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
*/

const sizeButton = document.getElementById('size-btn');

sizeButton.addEventListener('click', function getSize() {

    let gridSize = prompt('How many squares would you like on each side of the canvas? Please select a number between 1 and 100.');

    parseInt(gridSize);
    if (gridSize < 1 || gridSize > 100) {
        alert('The number must be between 1 and 100.');
        return getSize();
    }
    console.log(gridSize);

    const oldCanvas = document.querySelectorAll('#container > div');
    for (const square of oldCanvas) {
        square.remove();
    }

    let newSize = (gridSize * gridSize)

    for (let newSquares = 0; newSquares < newSize; newSquares++) {
        newGrid = document.createElement('div');

        newGrid.style.backgroundColor = '#FBF4EF';
        newGrid.style.width = (500/gridSize) + 'px';
        newGrid.style.height = (500/gridSize) + 'px';

        newGrid.style.flexShrink = 0;

        newGrid.style.border = 'solid 0.5px #E2CCCA';

        container.appendChild(newGrid);
    }

    const newCanvas = document.querySelectorAll('#container > div');
    for (let squares of newCanvas) {
        squares.addEventListener('mouseenter', ()=> {
            squares.style.backgroundColor = '#C3889D'
        });
    }
})

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', ()=> {
    const grid = document.querySelectorAll('#container > div');
    for (const each of grid) {
        each.style.backgroundColor = '#FBF4EF';
    }
})