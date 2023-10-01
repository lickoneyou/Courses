function truncate(str, num) {
  return {
    string: str,
    truncated:
      str.length > str.slice(0, num).length ? str.slice(0, num) + '...' : str,
  }
}

console.log(truncate('Наконец-то я выучил основы JavaScript!', 52))
