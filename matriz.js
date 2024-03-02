let diagonalPrincipal = 0;
let diagonalInversa = 0;

const array = [
  [1, 2, 3, 4],
  [4, 5, 6, 5],
  [7, 8, 9, 6],
  [10, 11, 12, 13],
];

function calcularOperacionDiagonal(array) {
  let cursor = array.length - 1;

  //console.log(cursor);
  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i == j) {
        //console.log(array[i][j]);
        diagonalPrincipal += array[i][j];
      }

      if (j == cursor) {
        diagonalInversa += array[i][j];
        console.log(array[i][j]);
        cursor--;
      }
    }
  }
}

calcularOperacionDiagonal(array);

console.log(
  `la resta absoluta es ${Math.abs(diagonalPrincipal - diagonalInversa)}`
);
