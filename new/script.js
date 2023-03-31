/* Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
You need make the divs appear as a grid (versus just one on each line). This is a perfect opportunity to apply what you have learned about flexbox.
Be careful with borders and margins, as they can adjust the size of the squares!
*/

const container = document.getElementById('container');

for (let squares = 0; squares < 256; squares++) {
    let grid = document.createElement('div');

    grid.style.backgroundColor = 'pink';
    grid.style.height = '31.25px';
    grid.style.width = '31.25px';

    grid.style.border = 'solid 0.5px black'

    container.appendChild(grid);
}