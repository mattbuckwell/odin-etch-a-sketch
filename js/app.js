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
    const gridSize = prompt("What size grid would you like? (Pick between 8 - 16)");
    console.log(gridSize);
})

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear Grid";
clearBtn.classList.add("btn");

// ***** Grid Container *****
const gameBoard = document.createElement("div");
gameBoard.style.width = "500px";
gameBoard.style.height = "500px";
gameBoard.style.border = "1px solid black";


// ***** Attaching Elements *****
container.appendChild(title);
container.appendChild(startBtn);
container.appendChild(clearBtn);
container.appendChild(gameBoard);
