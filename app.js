const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');
const cells = document.getElementsByClassName('sketch-cell');

function makeGrid() {
    for (let i = 0; i < 110; i++) {
        const row = document.createElement('div');
        row.classList.add('sketch-row');
        gridContainer.append(row);
        for (let i = 0; i < 160; i++) {
            const cell = document.createElement('div');
            cell.classList.add('sketch-cell');
            row.append(cell);
        }
    }
}

function paint() {
    for (cell of cells) {
    cell.addEventListener('mouseover', function onHover() {
        this.style.background = '#585c57';
    });
  };
}

makeGrid();
paint();

resetBtn.addEventListener('click', function resetGrid() {
    for (cell of cells) {
        cell.style.background = 'rgba(255, 255, 255, 0)';
    }
});