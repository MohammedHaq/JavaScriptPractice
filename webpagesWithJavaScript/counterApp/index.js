let count = 0;
let savedEl = document.getElementById("saved-el")
let countEl = document.getElementById("count-el")

function increasecounter() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - "
    savedEl.textContent += countStr
    countEl.innerText = 0;
    count = 0;
}