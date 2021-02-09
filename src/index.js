
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (!Array.isArray(matrix)) {return [];}
  //if (matrix.length == 0 || matrix == undefined) {return [];}
  for (let i = 0; i < matrix.length; i++) {
    //for (let j = 0; j < matrix[i].length; j++) {
        if( i % 2 !== 0) {
          arr[i] = matrix[i].reverse();
          //arr.push(matrix[i].reverse());
          } else {
            arr[i] = matrix[i];
            //arr.push(matrix[i]);
          }
  }
  return arr.flat();
}

