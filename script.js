// Create a webpage with a 16x16 grid of square divs.
// create row containing 16 divs
// append 15 identical rows below

const container = document.getElementById("container")

let row = document.createElement("div");
row.setAttribute("id", "row")
row.innerText = "hey";

container.appendChild(row);

let cell = document.createElement("div");
cell.setAttribute("id", "cell");
cell.innerText = "holla";

row.appendChild(cell);

newRow();

function newRow() {
    for (let col = 0; col <= 16; col++) {
    cell = document.createElement("div");
    cell.setAttribute("id", "cell");
    cell.innerText = "holla";
    row.appendChild(cell);
    console.log(col);
    }
}

function newGrid() {

}