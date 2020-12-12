// IN PRINCIPLE
// [0,0,0,0,]
// [0,0,0,0,]
// [0,0,0,0,]
// [0,0,0,0,]

// two dimensional array is a matrix i.e. a grid of numbers (columns, rows)
// to go through every element of the array we use two for loops
// var i counting the rows
// var j counting the columns

// for (var i = 0; i < cols; i++) {
//     for (var j = 0; j < rows; j++) {
//       print(array);
//     }
//   }
// how's step 1 different than the preparation?
const matrix = [];
for (let r = 0; r < 4; r += 1) {
  const row = [];
  for (let c = 0; c < 4; c += 1) {
    row.push(0);
  }
  matrix.push(row);
}

const createMatrix = (rowsCount, columnsCount) => {
  const returned = [];
  for (let r = 0; r < rowsCount; r += 1) {
    const row = [];
    for (let c = 0; c < columnsCount; c += 1) {
      row.push(0);
    }
    returned.push(row);
  }
  return returned;
};
console.info(createMatrix(1, 3));
