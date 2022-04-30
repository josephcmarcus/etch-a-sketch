const gridContainer = document.getElementById('grid-container');

function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('sketch-row');
        gridContainer.append(row);
        for (let i = 0; i < num; i++) {
            const cell = document.createElement('div');
            cell.classList.add('sketch-cell');
            row.append(cell);
        }
    }
}

makeGrid(16);

function removeAllCells() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

const cells = document.getElementsByClassName('sketch-cell');
for (cell of cells) {
    cell.addEventListener('mouseover', function onHover() {
        this.style.background = 'black';
    });
};

const btn = document.getElementById('grid-size-btn');

btn.addEventListener('click', function gridSize() {
    const num = prompt('Enter a number to resize the grid. You number will become the number of squares per side).');
    removeAllCells()
    makeGrid(num);
});