const gridContainer = document.getElementById('grid-container');
const gridSizeBtn = document.getElementById('grid-size-btn');
const resetBtn = document.getElementById('reset-btn');
const cells = document.getElementsByClassName('sketch-cell');
const delayTime = 100;

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

function removeAllCells() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function paint() {
    for (cell of cells) {
    cell.addEventListener('mouseover', function onHover() {
        this.style.background = 'black';
    });
  };
}

function resetGrid() {
    for (cell of cells) {
        cell.style.background = 'white';
    }
}

makeGrid(16);
paint();

resetBtn.addEventListener('click', function resetGrid() {
    for (cell of cells) {
        cell.style.background = 'white';
    }
});

gridSizeBtn.addEventListener('click', function gridSize() {
    let num = prompt('Enter a positive number to resize the grid. You number will become the number of squares per side).');
        while (num < 1) {
            num = prompt('You must enter a positive number.');
        }
    removeAllCells()
    makeGrid(num);
    resetGrid();
    setTimeout(function () {
        paint();
    }, delayTime);
});