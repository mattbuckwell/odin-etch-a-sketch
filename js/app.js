const container = document.querySelector("#game-container");
const gameBoard = document.createElement("div");

gameBoard.classList.add("game-board");

for(let i = 0; i < 10; i++) {
    let div = document.createElement("div"+[i]);
    div.classList.add("game-square");
    div.textContent = i+1;
    gameBoard.appendChild(div);
}

container.appendChild(gameBoard);
