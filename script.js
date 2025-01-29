
let numberSelected = 16;
let gridNumber = numberSelected * numberSelected;
const cellSize = (960 / numberSelected);
let userInput = 0;

function userInputCheck() {
if (!(userInput = 0)) {
    createGrid()
}
else {
    reset()
}
}

const container = document.querySelector("#grid")

function createGrid() {   
    for (let i = 0 ; i < gridNumber; i++) {
        const divs = document.createElement("div")
        divs.style.width = cellSize + "px";
        divs.style.height = cellSize + "px";
        divs.style.borderWidth = (cellSize * 0.01) + "px";
        divs.style.borderColor = "black"
        divs.style.borderStyle = "solid"
        divs.addEventListener("mouseover", () => {
            divs.style.backgroundColor = "blue"
        })
        container.appendChild(divs)
    }
}

const button = document.querySelector("button")

button.addEventListener("click", reset)

function reset() {
divs.remove()
userInput = prompt("How many cells would you like?");
numberSelected = userInput;
userInputCheck()
}

createGrid(16)



// const divs = document.createElement("div")
// container.appendChild(divs)
// divs.textContent = "I am a div"
// const para = document.createElement("p")
// para.textContent = "I am a div"
// divs.appendChild(para)