const codes = {
  A: 65,
  Z: 90,
};

const createColumn = (content) => {
  return `
    <div class="column">${content}</div>`;
};

console.log(createColumn());

const createRow = (content) => {
  return `<div class="row">
           <div class="row__info">1</div>
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

export const createTable = (rowsCount = 15) => {
  const colsCount = codes.Z - codes.A + 1;
  console.log(colsCount);
  const rows = [];
  const cols = new Array(colsCount)
      .fill("").map(toChar).map(toColumn);
  rows.push(createRow(cols.join("")));
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow());
  }
  return rows.join("");
};


// A: 65- Z: 90
