module.exports = function towelSort(matrix) {
  return !matrix || matrix.length === 0
    ? []
    : matrix
      .map((arr, i) => i % 2 ? arr.reverse() : arr)
      .join(',')
      .split(',')
}