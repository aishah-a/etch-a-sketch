let container = document.querySelector('#container');

//create 16*16 grid
function generateGrid() {
    for (let squares = 0; squares < 256; squares++) {
    const grid = document.createElement('div');

    container.appendChild(grid);

    grid.style.width = 31.25 + "px";
    grid.style.height = 31.25 + "px";
    grid.style.flexShrink = '0';
    grid.style.border = '0.5px solid #E2CCCA'
    grid.style.backgroundColor = '#FBF4EF'

    }
};


generateGrid();

const divs = document.querySelectorAll('#container > div');
for (const div of divs) {
    div.addEventListener('mouseover', function mouseOver() {
        div.style.backgroundColor = '#C3889D';
    })
}


// ask user for grid size choice
let gridSize;
function userGrid(size) { 
    gridSize = prompt('How many squares per side would you like in the grid? Please select a number between 1 and 100.');

    gridSize = parseInt(gridSize);
    if (gridSize < 1 || gridSize > 100) {
        alert('The number must be between 1 and 100.');
        return userGrid();
    } else if (isNaN(gridSize)) {
        alert('Please enter a numerical value.');
        return userGrid();
    }
    return gridSize;
}

const button = document.getElementById('btn');
button.addEventListener('click', () => {
    userGrid();
    
    const oldDivs = container.querySelectorAll('div');
    oldDivs.forEach(oldDiv => {
        oldDiv.remove();
    });

    let newGridSize = (gridSize * gridSize);

    let newContainer = document.querySelector('#container');

    function changeGridSize() {
        for (let squares = 0; squares < newGridSize; squares++) {
            const newDiv = document.createElement('div');
            
            newContainer.appendChild(newDiv);

            newDiv.style.width = 500/gridSize + 'px';
            newDiv.style.height = 500/gridSize + 'px';
            newDiv.style.flexShrink = '0';
            newDiv.style.border = '0.5px solid #E2CCCA'
            newDiv.style.backgroundColor = '#FBF4EF'
        }
    }
    changeGridSize();
    

    const divs = container.querySelectorAll('div');
    for (const div of divs) {
        div.addEventListener('mouseover',function mouseOver() 
        {
            div.style.backgroundColor = '#C3889D';
        });
    }
}
);

const reset = document.getElementById('reset-btn');
reset.addEventListener('click', () => {
    const divs = container.querySelectorAll('div');
    for (const div of divs) {
        div.style.backgroundColor = '#FBF4EF'
    }
    console.log(divs);
    }
)