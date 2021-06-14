const board = document.getElementById("board");
const colorPicker = document.getElementById("colorPicker");

let colNo = 1;
let rowNo = 1;
let itemNo = 1;
let color = "#e66465";

board.addEventListener("click", function (e) {
  // e.target is our targetted element.
  // try doing console.log(e.target.nodeName), it will result LI
  if (e.target && e.target.nodeName == "DIV") {
    e.target.style.backgroundColor = color;
  }
});

colorPicker.addEventListener("change", (event) => {
  color = event.target.value;
});

function boardCols(col) {
  board.style = `grid-template-columns: repeat(${col}, minmax(auto, 70px))`;
}

function addCol() {
  let modifier = 0;
  for (let i = 1; i <= rowNo; i++) {
    let div = document.createElement("div");
    div.className = "grid-item";
    div.innerText = ++itemNo;
    board.insertBefore(div, board.children[colNo * i + modifier]);
    modifier++;
  }
  colNo++;
  boardCols(colNo);
}

function removeCol() {
  if (colNo <= 1) {
    return;
  }

  let index = itemNo;
  for (let i = 1; i <= rowNo; i++) {
    board.children[index - 1].remove();
    --itemNo;
    index -= colNo;
  }
  colNo--;
  boardCols(colNo);
}

function addRow() {
  for (let i = 0; i < colNo; i++) {
    let div = document.createElement("div");
    div.className = "grid-item";
    div.innerText = ++itemNo;
    board.append(div);
  }
  rowNo++;
}

function removeRow() {
  if (rowNo <= 1) {
    return;
  }

  for (let i = 0; i < colNo; i++) {
    itemNo--;
    board.children[itemNo].remove();
  }
  rowNo--;
}

function fillAll() {
  for (let i = 0; i < itemNo; i++) {
    board.children[i].style.backgroundColor = color;
  }
}

function fillUncolored() {
  for (let i = 0; i < itemNo; i++) {
    if (
      board.children[i].style.backgroundColor == null ||
      board.children[i].style.backgroundColor === "transparent" ||
      board.children[i].style.backgroundColor === ""
    ) {
      board.children[i].style.backgroundColor = color;
    }
  }
}

function clear() {
  for (let i = 0; i < itemNo; i++) {
    board.children[i].style.backgroundColor = "transparent";
  }
}

document.getElementById("addCBtn").onclick = addCol;

document.getElementById("removeCBtn").onclick = removeCol;

document.getElementById("addRBtn").onclick = addRow;

document.getElementById("removeRBtn").onclick = removeRow;

document.getElementById("fillAllBtn").onclick = fillAll;

document.getElementById("fillUnBtn").onclick = fillUncolored;

document.getElementById("clearBtn").onclick = clear;
