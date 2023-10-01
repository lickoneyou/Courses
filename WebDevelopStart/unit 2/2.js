function pow(a, b = a) {
  if (typeof a !== 'number' || typeof b !== 'number' || b <= 0) {
    return null
  }
  return a ** b
}

pow(2)
// Функция должна вернуть 4

pow(2, 2)
// Функция должна вернуть 4

pow('Hello', 2)
// Функция должна вернуть null

pow(2, -1)
// Функция должна вернуть null
