// Create a webpage with a 16x16 grid of square divs.
// create row containing 16 divs
// create row
// insert 16 divs as cells
// create row 15 more times

let container = document.querySelector('#container');

function generateGrid() {
    for (let squares = 0; squares < 256; squares++) {
    const grid = document.createElement('div');
    grid.setAttribute("id", "grid-cell");

    container.appendChild(grid);

    grid.style.width = 31.25 + "px";
    grid.style.height = 31.25 + "px";
    grid.style.flexShrink = '0';
    grid.style.border = '0.5px solid #E2CCCA'
    grid.style.backgroundColor = '#FBF4EF'

    }
}

generateGrid();