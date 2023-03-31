const container = document.getElementById('container');

for (let squares = 0; squares < 256; squares++) {
    let grid = document.createElement('div');

    grid.style.backgroundColor = 'pink';
    grid.style.height = '31.25px';
    grid.style.width = '31.25px';

    grid.style.border = 'solid 0.5px black'

    container.appendChild(grid);
}

/*
Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
adding a new class to the div.
changing the div’s background color using JavaScript.

*/

const grid = container.querySelectorAll('div');

for (const squares of grid) {
    squares.addEventListener('mouseenter', () => {
        squares.style.backgroundColor = 'black';
    }
    )
}