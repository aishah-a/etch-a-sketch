const container = document.querySelector(".container");

// 16 x 16
function createGrid() {
    for (let rows = 0; rows < 16; rows++) {
        const row = document.createElement("div");
        row.setAttribute("class", "square");
        row.setAttribute("class", "col");
        container.appendChild(row);

        for (let cols = 0; cols < 16; cols++) {
            const col = document.createElement("div");
            col.setAttribute("class", "square");
            row.appendChild(col);
        }
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

createGrid();
highlight();