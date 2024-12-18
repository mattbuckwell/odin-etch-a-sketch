// ***** Project Container *****
const container = document.querySelector("#container");


// ***** Project Title *****
const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";


// ***** Project Buttons *****
const createBtn = document.createElement("button");
createBtn.textContent = "Create Grid";
createBtn.classList.add("btn");
createBtn.addEventListener("click", () => {
    const gridSize = prompt("What size grid would you like? (Maximum 100)");
    deleteGrid();
    createGrid(gridSize);
});

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear Grid";
clearBtn.classList.add("btn");
clearBtn.addEventListener("click", () => {
    clearGrid();
});


// ***** Grid Container *****
const gameBoard = document.createElement("div");
gameBoard.classList.add("game-board");


// ***** Grid Functions *****
function createGrid (gridSize) {
    const boxSize = ((500/gridSize)-2);
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridBox.style.width = boxSize.toString() + "px";
        gridBox.style.height = boxSize.toString() + "px";
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.backgroundColor = "red";
        })
        gameBoard.appendChild(gridBox);
    }
}

function clearGrid () {
    const gridBxoes = document.querySelectorAll(".grid-box");
    gridBxoes.forEach(element => {
        element.style.backgroundColor = "white";
    });
}

function deleteGrid () {
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach(element => {
        element.remove();
    });
}


// ***** Attaching Elements to Project Container *****
container.appendChild(title);
container.appendChild(createBtn);
container.appendChild(clearBtn);
container.appendChild(gameBoard);


// ***** Default Starting Grid *****
createGrid(8);
