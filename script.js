const board = document.getElementById("board");

let colNo = 1;
let rowNo = 1;
let itemNo = 1;

function boardCols(col) {
    board.style = `grid-template-columns: repeat(${col}, minmax(auto, 70px))`;
  }