let NUMBERS = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
}

module.exports = function toReadable(number) {
  let str = ''
  if (number == 0) {
    return 'zero'
  }
  while (number > 0) {
    if (number >= 100) {
      str += NUMBERS[number.toString()[0]] + ' hundred'
      number -= number.toString()[0] * 100
    }
    if (number <= 20) {
      str += ` ${NUMBERS[number]}`
      number -= number
    }
    if (number > 20) {
      str += ' ' + NUMBERS[(number.toString()[0] * 10).toString()]
      number -= number.toString()[0] * 10
    }
  }
  return str.replace(/undefined/gi, '').trim()
}
