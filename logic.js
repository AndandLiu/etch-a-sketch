function buildBoard(squareSize) {
    const container = document.querySelector("#container");

    document.querySelectorAll("#cell").forEach(cell => cell.remove());

    for(let i = 0; i < squareSize*squareSize; i++) {
        const div = document.createElement("div");
        div.id = "cell";
        div.classList.add("cell");
        div.addEventListener("mouseover", () => {
            div.classList.add("cellSketched");
        });
        container.appendChild(div)
    }
}

function changeSize() {
    let size = prompt("Enter new size: x by x\n(Limit: 100)");

    while(size > 100) {
        size = prompt("Enter new size: x by x\n(Limit: 100)");
    }

    buildBoard(size);
}

buildBoard(16);