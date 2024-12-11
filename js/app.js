const container = document.querySelector("#container");

const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";

const startBtn = document.createElement("button");
startBtn.textContent = "Create Grid";
startBtn.classList.add("btn");

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear Grid";
clearBtn.classList.add("btn");

container.appendChild(title);
container.appendChild(startBtn);
container.appendChild(clearBtn);
