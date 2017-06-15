function isEven (num) {
  return num % 2 === 0
}

const d6 = Die(getRandomInt, [1, 6])

// length variable exists if we ever want to
// add more stocks while the game is progressing
let length = 3
const stocks = []

function generate (type) {
  const dice = d6.roll(length)
  let base6 = dice.slice()

  if (type === 'change') base6[0] = isEven(base6[0]) ? '+' : '-'

  base6 = base6.map((die) => {
    if (typeof die === 'number' && die === 6) {
      return 0
    } else {
      return die
    }
  })

  const base10 = parseInt(base6.join(''), 6)

  return {
    dice,
    [type]: base10
  }
}

function replace (stock) {
  if (stock && stock.value && stock.value > 0) return stock
  else return generate('value')
}

function change (stock) {
  const updated = generate('change')

  updated.value = stock.value + updated.change

  return updated
}

function all (stocks, fn) {
  for (let i = 0; i < length; i++) {
    stocks[i] = fn(stocks[i])
  }
}

all(stocks, replace)

let phases = 0
function phase () {
  phases++
}
