module.exports = function towelSort(matrix) {
  const result = [];
  if(matrix) matrix.forEach((el, index) => index % 2 !== 0 ? result.push(el.reverse()) : result.push(el))

  return result.flat();
}
