const codes = {
  A: 65,
  Z: 90,
};

const createColumn = (content) => {
  return `
    <div class="column" datatype="resizable">${content}
    <div class="col-resize" data-resize="col"></div>
    </div>`;
};

console.log(createColumn());

const createRow = (index, content) => {
  const resizer = index ? "<div class=\"row-resize\" " +
    "data-resize=\"row\"></div>" : "";
  console.log(resizer);

  return `<div class="row">
           <div class="row__info">
           ${index ? index : ""}
           ${resizer}
           </div>
           <div class="row__data">${content}</div>
          </div>`;
};

const createCell = () => {
  return `
<div class="cell" contenteditable="true"></div>`;
};

console.log(createCell());

const toChar = (_, index) => {
  return String.fromCharCode(index + codes.A);
};

const toColumn = (element) => {
  return `${createColumn(element)}`;
};

export const createTable = (rowsCount = 100) => {
  const colsCount = codes.Z - codes.A + 1;
  console.log(colsCount);
  const rows = [];
  const cols = new Array(colsCount)
      .fill("").map(toChar).map(toColumn).join("");
  rows.push(createRow(null, cols));
  for (let i = 0; i < rowsCount; i++) {
    const cell = new Array(colsCount)
        .fill("").map(createCell).join("");
    rows.push(createRow(i+1, cell));
  }
  return rows.join("");
};


// A: 65- Z: 90
