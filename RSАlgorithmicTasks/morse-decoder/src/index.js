const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  const dot = '.'
  const dash = '-'
  let arr = expr
    .split('**********')
    .map((el) =>
      el
        .match(/.{1,10}/g)
        .map((el) =>
          el
            .match(/.{1,2}/g)
            .map((el) => {
              if (el == '00') {
                return (el = '')
              }
              if (el == '10') {
                return (el = dot)
              }
              if (el == '11') {
                return (el = dash)
              }
            })
            .join(''),
        )
        .map((el) => MORSE_TABLE[el])
        .join(''),
    )
    .join(' ')
  // write your solution here
  return arr
}

module.exports = {
  decode,
}
