const codes = {
  A: 65,
  Z: 90,
};

const createColumn = (content, index) => {
  return `
    <div class="column" data-type="resizable" data-col=${index}>${content}
    <div class="col-resize" data-resize="col"></div>
    </div>`;
};

const createRow = (index, content) => {
  const resizer = index ? "<div class=\"row-resize\" " +
    "data-resize=\"row\"></div>" : "";

  return `<div class="row" data-type="resizable">
           <div class="row__info">
           ${index ? index : ""}
           ${resizer}
           </div>
           <div class="row__data">${content}</div>
          </div>`;
};

const createCell = (row) => {
  return (_, col) => {
    return `<div class="cell" contenteditable="true" 
data-col=${col} data-id=${row}:${col}></div>`;
  };
};

const toChar = (_, index) => {
  return String.fromCharCode(index + codes.A);
};


export const createTable = (rowsCount = 100) => {
  const colsCount = codes.Z - codes.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill("").map(toChar).map(createColumn).join("");
  rows.push(createRow(null, cols));
  for (let i = 0; i < rowsCount; i++) {
    const cell = new Array(colsCount)
        .fill("")
        // .map((_, index) => createCell(i, index))
        .map(createCell(i))
        .join("");
    rows.push(createRow(i + 1, cell));
  }
  return rows.join("");
};


// A: 65- Z: 90
