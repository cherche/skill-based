function Die (generator, args) {
  return {
    roll: function (times) {
      if (times == null || times === 1) return generator.apply(null, args)

      const results = []
      for (let i = 0; i < times; i++) results.push(this.roll())

      return results
    }
  }
}

/*
function Range (num1, num2) {
  const start = num2 ? num1 : 0
  const end = num2 || num1

  return [...Array(end).keys()].slice(start, end);
}
*/

function getRandomInt (min, max, exclusive = false) {
  const range = max - min + (exclusive ? 0 : 1)
  const offset = min

  return Math.floor(Math.random() * range) + offset
}
