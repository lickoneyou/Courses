function timer(ta, bul, sec) {
  if (typeof ta !== 'number') {
    throw new Error('Timeout is not a number')
  }
  if (typeof bul !== 'boolean') {
    throw new Error('2 par is not a boolean')
  }
  if (sec && typeof sec !== 'number') {
    throw new Error('check your 3th par')
  }
  if (bul === true && sec) {
    throw new Error('error')
  }
  if (bul) {
    setTimeout(() => {
      console.log(new Date())
    }, ta)
  } else {
    const intTime = setInterval(() => {
      console.log(new Date())
    }, ta)
    setTimeout(() => {
      clearInterval(intTime)
    }, sec)
  }
}

console.log(timer(2000, true, 10000))
