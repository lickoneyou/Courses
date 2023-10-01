const riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это съедобное', 'это фрукт'],
  tries: 3,
  checkAnswer(answer) {
    if (this.correctAnswer === answer.toLowerCase().trim()) {
      alert('You Win!')
      this.tries = 3
    } else if (this.correctAnswer !== answer.toLowerCase().trim()) {
      if (this.tries == 1) {
        alert('You lose')
        this.tries = 3
        return
      }
      alert('Try agin')
      this.tries--
    }
  },
}

document.getElementById('riddle').innerText = riddle.question
const firstHelp = document.querySelector('.firstHelp')
const secondHelp = document.querySelector('.secondHelp')

function check() {
  const input = document.getElementsByTagName('input')[0]
  const guessedAnswer = input.value
  if (guessedAnswer) {
    riddle.checkAnswer(guessedAnswer)
    if (riddle.tries == 2) {
      firstHelp.innerText = `Подсказка 1: ${riddle.hints[0]}`
      return
    }
    if (riddle.tries == 1) {
      secondHelp.innerText = `Подсказка 2: ${riddle.hints[1]}`
      return
    } else {
      firstHelp.innerText = ''
      secondHelp.innerText = ''
    }
  }
}
