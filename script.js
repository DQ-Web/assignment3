const board = document.getElementById("board");

let colNo = 1;
let rowNo = 1;
let itemNo = 1;

function boardCols(col) {
    board.style = `grid-template-columns: repeat(${col}, minmax(auto, 70px))`;
}

function addCol() {
    let modifier = 0;
    for (let i = 1; i <= rowNo; i++) {
        let div = document.createElement("div");
        div.className = 'grid-item';
        div.innerText = ++itemNo;
        board.insertBefore(div, board.children[colNo * i + modifier]);
        modifier++;
    }
    colNo++;
    boardCols(colNo)
}

document.getElementById("addCBtn").onclick = addCol;