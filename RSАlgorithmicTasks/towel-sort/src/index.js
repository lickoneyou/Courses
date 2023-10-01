// You should implement your task here.

module.exports = function towelSort(matrix) {
  return matrix
    ? matrix.map((el, ind) => (ind % 2 !== 0 ? el.reverse() : el)).flat()
    : []
}
