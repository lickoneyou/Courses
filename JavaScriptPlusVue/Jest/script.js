function mult(a = 0, b = 0) {
  return typeof a == 'number' && typeof b == 'number' ? a * b : 'use number'
}

module.exports = mult;
