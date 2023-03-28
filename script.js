// Create a webpage with a 16x16 grid of square divs.
// create row containing 16 divs
// create row
// insert 16 divs as cells
// create row 15 more times


const container = document.getElementById("container");

let cell;


function newRow() {
    let row = document.createElement("div");
    row.setAttribute("id", "row");
    container.appendChild(row);
    for (let col = 0; col < 16; col++) {
        cell = document.createElement("div");
        cell.setAttribute("id", "cell");
        cell.innerText = "holla";
        row.appendChild(cell);
    }
}


newRow();