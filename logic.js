function buildBoard(squareSize) {
    const container = document.querySelector("#container");

    document.querySelectorAll("#cell").forEach(cell => cell.remove());

    for(let i = 0; i < squareSize*squareSize; i++) {
        const div = document.createElement("div");
        div.id = "cell";
        div.classList.add("cell");
        div.style.opacity = "1";

        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;

        div.addEventListener("mouseover", () => {
            div.style.background = rgb;
            div.style.opacity = div.style.opacity - "0.1";
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