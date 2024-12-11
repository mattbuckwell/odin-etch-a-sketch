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
})

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear Grid";
clearBtn.classList.add("btn");

// ***** Grid Container *****
const gameBoard = document.createElement("div");
gameBoard.style.width = "500px";
gameBoard.style.height = "500px";
gameBoard.style.border = "1px solid black";
gameBoard.classList.add("game-board");


// ***** Grid Creation Function *****
function createGrid (gridSize) {
    const boxSize = ((500/gridSize)-2);
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let box = document.createElement("div");
        box.style.width = boxSize.toString() + "px";
        box.style.height = boxSize.toString() + "px";
        box.style.border = "1px solid black";
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "red";
        })
        gameBoard.appendChild(box);
    }
}


// ***** Attaching Elements *****
container.appendChild(title);
container.appendChild(startBtn);
container.appendChild(clearBtn);
container.appendChild(gameBoard);
