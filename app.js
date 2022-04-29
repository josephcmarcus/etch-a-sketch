const mainContainer = document.getElementById('main-container');

function makeBox(num = 16) {
    for (let i = 0; i < num; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add('sketch-box');
    mainContainer.append(createDiv);
    }
};