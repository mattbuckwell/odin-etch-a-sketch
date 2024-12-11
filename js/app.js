// ***** Project Container *****
const container = document.querySelector("#container");

// ***** Project Title *****
const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";

// ***** Buttons *****
const startBtn = document.createElement("button");
startBtn.textContent = "Create Grid";
startBtn.classList.add("btn");
startBtn.addEventListener("click", () => {
    const gridSize = prompt("What size grid would you like? (Maximum 100)");
    createGrid(gridSize);
});

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear Grid";
clearBtn.classList.add("btn");
clearBtn.addEventListener("click", () => {
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach(element => {
        element.remove();
    });
});

// ***** Grid Container *****
const gameBoard = document.createElement("div");
gameBoard.classList.add("game-board");


// ***** Grid Creation Function *****
function createGrid (gridSize) {
    const boxSize = ((500/gridSize)-2);
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let gridBox = document.createElement("div");
        girdBox.classList.add("grid-box");
        girdBox.style.width = boxSize.toString() + "px";
        girdBox.style.height = boxSize.toString() + "px";
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.backgroundColor = "red";
        })
        gameBoard.appendChild(box);
    }
}


// ***** Attaching Elements to Project Container *****
container.appendChild(title);
container.appendChild(startBtn);
container.appendChild(clearBtn);
container.appendChild(gameBoard);
