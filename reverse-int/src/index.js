module.exports = function reverse(n) {
  return +n
    .toString()
    .replace(/[^0-9]/gi, '')
    .split('')
    .reverse()
    .join('')
}
