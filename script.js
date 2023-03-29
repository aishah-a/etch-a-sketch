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
button.addEventListener("click", () => {
    userGrid();
    const oldDivs = document.querySelectorAll("#container > div");
    oldDivs.forEach(oldDiv => {
        oldDiv.remove();
    });
    // create new grid based on input
    for (let cells = 0; cells < (gridSize * gridSize); cells++) {
        const newDiv = document.createElement("div");
        newDiv.innerText = 'test';
        container.appendChild(newDiv);
    }
 // make new grid
});

// ask user for grid size choice
let gridSize;
function userGrid(size) { 
    gridSize = prompt('How many squares per side would you like in the grid? Please select a number between 1 and 100.');

    gridSize = parseInt(gridSize);
    if (gridSize < 1 || gridSize > 100) {
        alert('The number must be between 1 and 100.');
        return userGrid();
    } else if (isNaN(gridSize)) {
        alert("Please enter a numerical value.");
        return userGrid();
    }
    return gridSize;
}



/*

Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.



*/
