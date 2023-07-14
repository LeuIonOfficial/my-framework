const codes = {
  A: 65,
  Z: 90,
};

const createColumn = () => {
  return `
<div class="column">A</div>`;
};

console.log(createColumn());

const createRow = () => {
  return `<div class="row">
           <div class="row__info">1</div>
           <div class="row__data"></div>
          </div>`;
};

const createCell = () => {
  return `
<div class="cell" contenteditable="true"></div>`;
};

console.log(createCell());

export const createTable = (rowsCount = 15) => {
  const colsCount = codes.Z - codes.A;
  console.log(colsCount);
  const rows = [];
  rows.push(createRow());
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow());
  }
  return rows.join("");
};


// A: 65- Z: 90
