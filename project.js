const container = document.querySelector(".container");

function createGrid(num) {
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

