function censor() {
  const arr = []
  return function (a, b = '') {
    if (b) {
      arr.push([a, b])
    } else {
      for (p of arr) {
        a = a.replace(new RegExp(p[0], 'gi'), p[1])
      }
      return a
    }
  }
}

let c1 = censor()

c1('php', 'js')
c1('backend', 'frontend')

console.log(
  c1(
    'PHP is the most popular programming language for backend web-development',
  ),
)
