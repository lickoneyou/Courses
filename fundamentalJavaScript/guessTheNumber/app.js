let yourTries = document.querySelector('.yourTries')

let secretNum = Math.ceil(Math.random() * 10)
let tries = 5
yourTries.textContent = `Осталось попыток ${tries}`

function guessNum(num) {
  if (num == secretNum) {
    tries = 5
    yourTries.textContent = `Осталось попыток ${tries}`

    alert(`You Win , Guess Number: ${secretNum}`)
    secretNum = Math.ceil(Math.random() * 10)
    return
  } else if (tries == 0) {
    tries = 5
    yourTries.textContent = `Осталось попыток ${tries}`

    alert(`You lose, Guess Number: ${secretNum}`)
    secretNum = Math.ceil(Math.random() * 10)
    return
  }
  --tries
  yourTries.textContent = `Осталось попыток ${tries}`
  alert('Try again')
}
