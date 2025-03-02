const container = document.querySelector(".container");
const sizeButton = document.querySelector("button");
let gridSize = 16;

function createGrid(num) {
    clear();
    for (let cols = 0; cols < num; cols++) {
        const col = document.createElement("div");
        col.setAttribute("class", "column");
        col.style = "display: flex; flex-direction: column;";
        container.appendChild(col);
        
        for (let rows = 0; rows < num; rows++) {
            const row = document.createElement("div");
            row.setAttribute("class", "square");
            col.appendChild(row);
        }
    }

    highlight();
}

function getGridSize() {
    gridSize = prompt("Please select a number between 1 and 100");
    if (gridSize <= 100) {
        clear();
        createGrid(gridSize);
    } else {
        alert("The number must be between 1 and 100.");
        getGridSize();
    }
}


function highlight() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", () =>
        {
            square.style.backgroundColor = "red";
        })
    })
}

function clear() {
    const grid = document.querySelectorAll(".square");
    grid.forEach(sq => {
        sq.remove();
    })
    const columns = document.querySelectorAll(".column");
    columns.forEach(col => {
        col.remove();
    })
    
}

// default grid
createGrid(gridSize);

sizeButton.addEventListener("click", getGridSize);

